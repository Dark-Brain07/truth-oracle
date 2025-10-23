import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { claim } = await request.json();

    if (!claim || claim.trim().length === 0) {
      return NextResponse.json(
        { error: 'Claim text is required' },
        { status: 400 }
      );
    }

    const prompt = `Analyze this claim and respond ONLY with valid JSON in this exact format:
{
  "truthScore": <number 0-100>,
  "category": "<Politics/Technology/Business/Science/Health/Crypto/Other>",
  "sources": ["source1", "source2", "source3"],
  "reasoning": "<brief explanation>"
}

Claim: "${claim}"

Remember: Respond with ONLY the JSON object, no other text.`;

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: 'You are a professional fact-checker. Always respond with valid JSON only.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.3,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API Error:', errorData);
      throw new Error(`Groq API failed: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content.trim();
    
    // Clean up any markdown formatting
    const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
    const result = JSON.parse(cleanContent);

    return NextResponse.json({
      truthScore: result.truthScore || 50,
      category: result.category || 'Other',
      sources: result.sources || ['No sources found', 'No sources found', 'No sources found'],
      reasoning: result.reasoning || 'Unable to verify claim'
    });

  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json(
      { error: 'Failed to verify claim. Please try again.' },
      { status: 500 }
    );
  }
}
