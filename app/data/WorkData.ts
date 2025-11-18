export const WData = [
  {
    title: "How ZkBio Works",
    desc: "ZkBio uses zero-knowledge proofs on the Cardano blockchain to enable researchers to collaborate and verify data attributes without ever exposing the underlying sensitive information.",
    pts: [
      {
        title: "Researcher Uploads Data",
        val: "A researcher uploads their dataset to ZkBio. The data is encrypted and stored securely. Only the researcher controls access to their raw data.",
      },
      {
        title: "Zero-Knowledge Proofs Generated",
        val: "MidnightZK generates cryptographic proofs that verify specific attributes about the data (like sample size, quality scores, compliance) without revealing the actual data itself.",
      },
      {
        title: "Collaborators Discover & Verify",
        val: " Other researchers can browse available datasets and verify their attributes through zero-knowledge proofs. They can confirm data quality and relevance before requesting access.",
      },
      {
        title: "Secure Access Request",
        val: " When a researcher finds relevant data, they request access. The data owner reviews the request and can grant granular permissions based on their trust and collaboration needs.",
      },
      {
        title: "Immutable Audit Trail",
        val: "All data access and sharing activities are recorded on Cardano's blockchain, creating a permanent, tamper-proof audit trail for compliance and accountability.",
      },
    ],
  },
];
