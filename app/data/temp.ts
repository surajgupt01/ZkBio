import { title } from "process";

var Anil = [
  "✓ Total protein sequences: 2,847 verified entries",
  "✓ Interaction confidence score: >0.85 for 94% of pairs",
  "✓ Species coverage: H. sapiens, M. musculus, D. melanogaster",
  "✓ Experimental methods: Y2H, Co-IP, TAP-MS validated",
  "✓ Data completeness: 98.2% complete records",
  "✓ Molecular weight range: 10-250 kDa verified",
  "✓ FHIR compliance: Full adherence to HL7 standards",
  "✓ Quality control: Passed automated validation checks",
];

const GG = [
  "✓ Unique compounds characterized: 1,523",
  "✓ Purity verification: >98% for all compounds",
  "✓ Synthesis method: Organocatalysis pathway validated",
  "✓ Solubility data: Aqueous and organic solvents tested",
  "✓ Molecular weight: 150-850 g/mol range verified",
  "✓ Bioavailability prediction: Lipinski's rule compliance 87%",
  "✓ Toxicity screening: LD50 values documented",
  "✓ Stability testing: 6-month data at multiple temperatures",
  "✓ ChEMBL cross-reference: 92% compounds mapped",
  "✓ Green chemistry score: Average 7.2/10",
];

const DK = [
  "    ✓ Unique compounds characterized: 1,523",
  "✓ Purity verification: >98% for all compounds",
  "✓ Synthesis method: Organocatalysis pathway validated",
  "✓ Solubility data: Aqueous and organic solvents tested",
  "✓ Molecular weight: 150-850 g/mol range verified",
  "✓ Bioavailability prediction: Lipinski's rule compliance 87%",
  "✓ Toxicity screening: LD50 values documented",
  "✓ Stability testing: 6-month data at multiple temperatures",
  "✓ ChEMBL cross-reference: 92% compounds mapped",
  "✓ Green chemistry score: Average 7.2/10",
];

export const modalData = [
  {
    title: "Protein Interaction Study Alpha",
    Owner: "Dr. K. Anil Kumar",
    Type: "Protein Analysis",
    Samples: "2,847",
    key: {
      title: "ZERO-KNOWLEDGE PROOF HASH",
      val: "zk1x7a9f2e8d3c5b4a6e9f1d8c2b5a3e7f9d4c6b8a1e3f5d7c9b2a4e6f8d1c3b5a7e9",
    },
    VA: { title : "Verifiable Attributes (without revealing data)", val: Anil },
    PG: {
      title : " 🔒 PRIVACY GUARANTEE ",
        val : "Original data remains encrypted. Only statistical proofs are visible.",
    },
    Verified: false,
    ZKProtected: true,
  },

  {
    title: " Molecular Compound Analysis",
    Owner: "Dr. G. Gopikrishna",
    Type: "Chemical Compounds",
    Samples: "1,523 ",
    key: {
      title: "ZERO-KNOWLEDGE PROOF HASH",
      val: "zk2b8c9d1e4f6a7b2c8d3e9f5a1b7c4d6e8f2a9b1c5d7e3f9a6b8c2d4e1f7a9b3c5",
    },
    VA: {title :  "Verifiable Attributes (without revealing data)" , val: GG },
    PG: {
      title : " 🔒 PRIVACY GUARANTEE ",
       val :  "Original data remains encrypted. Only statistical proofs are visible.",
    },
    Verified: false,
    ZKProtected: true,
  },

  {
    title: " Clinical Trial Dataset Beta",
    Owner: "Dr. K. Anil Kumar",
    Type: "Clinical Data",
    Samples: "892",
    key: {
      title: "ZERO-KNOWLEDGE PROOF HASH",
      val: "zk3c5d7e9f2a4b6c8d1e3f5a7b9c2d4e6f8a1b3c5d7e9f2a4b6c8d1e3f5a7b9c2d4",
    },
    VA: { title : "Verifiable Attributes (without revealing data)" , val: DK },
    PG: {
       title : " 🔒 PRIVACY GUARANTEE ",
        val : "Original data remains encrypted. Only statistical proofs are visible.",
    },
    Verified: true,
    ZKProtected: true,
  },
];
