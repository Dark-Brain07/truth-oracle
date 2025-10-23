// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract TruthOracle {
    struct Verification {
        string claimText;
        uint8 truthScore;
        string[] sources;
        address verifier;
        uint256 timestamp;
        string category;
    }
    
    mapping(uint256 => Verification) public verifications;
    mapping(address => uint256) public reputationScore;
    uint256 public verificationCount;
    
    event ClaimVerified(
        uint256 indexed verificationId,
        string claimText,
        uint8 truthScore,
        address verifier,
        string category
    );
    
    event ReputationUpdated(address indexed user, uint256 newScore);
    
    function verifyClaimOnchain(
        string memory _claimText,
        uint8 _truthScore,
        string[] memory _sources,
        string memory _category
    ) public returns (uint256) {
        require(_truthScore <= 100, "Truth score must be <= 100");
        
        verificationCount++;
        
        verifications[verificationCount] = Verification({
            claimText: _claimText,
            truthScore: _truthScore,
            sources: _sources,
            verifier: msg.sender,
            timestamp: block.timestamp,
            category: _category
        });
        
        // Update reputation
        if (_truthScore >= 80) {
            reputationScore[msg.sender] += 10;
        } else if (_truthScore >= 50) {
            reputationScore[msg.sender] += 5;
        } else {
            reputationScore[msg.sender] += 2;
        }
        
        emit ClaimVerified(verificationCount, _claimText, _truthScore, msg.sender, _category);
        emit ReputationUpdated(msg.sender, reputationScore[msg.sender]);
        
        return verificationCount;
    }
    
    function getVerification(uint256 _id) public view returns (
        string memory claimText,
        uint8 truthScore,
        string[] memory sources,
        address verifier,
        uint256 timestamp,
        string memory category
    ) {
        Verification memory v = verifications[_id];
        return (v.claimText, v.truthScore, v.sources, v.verifier, v.timestamp, v.category);
    }
    
    function getUserReputation(address _user) public view returns (uint256) {
        return reputationScore[_user];
    }
}
