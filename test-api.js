const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey: 'sk-eiwkZP1EZXBLPG0saNs2JKhCkoLvdIjb0cZ3dyzCSTdIMCL5',
  baseURL: 'https://agentrouter.org/v1',
});

async function test() {
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: 'Say hello' }],
    });
    console.log('✅ SUCCESS:', completion.choices[0].message.content);
  } catch (error) {
    console.error('❌ ERROR:', error.message);
    console.error('Status:', error.status);
    console.error('Headers:', error.headers);
  }
}

test();
