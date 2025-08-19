export default {
  siteName: 'Code IT - Professional AI & IT Services',
  tagline: 'Transforming Data into Decisions. Automating the Future.',
  contact: {
    name: 'Petros Apostolou',
    email: 'petros@codeitllc.com',
    phone: '(612) 461-8753',
    website: 'http://localhost:5173',
    linkedin: 'https://www.linkedin.com/in/petros-apostolou/',
  },
  calendlyUrl: 'https://calendly.com/trs-apostolou/30min', // replace with your Calendly link
  
  services: [
    {
      title: 'Advanced AI & Machine Learning Analytics',
      bullets: ['Machine Learning & Computer vision, LLMs, Generative AI', 'Custom Model Training & Deployment', 'Edge & Cloud Solutions']
    },
     {
      title: 'Product Development & Cyber Security Services',
      bullets: ['Fullstack Applications & Website Development, MVP Orchestration & Deployment', 'Software Encryption & Security Enhancement']
    },
    {
      title: 'Predictive Modeling & System Automation-Optimization',
      bullets: ['Recommendation Engines', 'Process Automation & Optimization', 'Sensor Feedback Control']
    },
    {
      title: 'Grant Proposal Technical Writing',
      bullets: ['SBIR/STTR & Other Federal Program Proposals', 'Technical Sections & Budgets']
    },
    {
      title: 'Advanced Programming Bootcamps',
      bullets: ['Artificial Intelligence for Everyone', 'Functional Programming is Power', 'Introduction to Algorithms']
    },
    {
      title: 'Consultation, Mentoring & Troubleshooting',
      bullets:  ['Strategic AI and data science guidance tailored to your goals', 'Hands-on support for project planning and execution',
         'Skill development and knowledge transfer for your team']
    },
    {
      title: 'AI Audit - Special Discount Offer',
      bullets: ['Comprehensive AI readiness evaluation', 'Identify cost-saving opportunities', 'Custom report with actionable insights', 'Discounted for first-time clients']
    },

  ],
  caseStudies: [
     {
      id: 1,
      title: 'Enhancing Food Safety with AI-Driven Inspection',
      client: 'Food processing facility',
      category: 'Food Processing',
      challenge: 'Existing manual inspection processes struggled to detect subtle contaminants and inconsistencies, risking product recalls and compliance issues.',
      solution: 'Implemented an AI-powered vision inspection system integrated with high-speed cameras and real-time alerts, tailored to FDA and USDA guidelines.',
      results: [
      'Detection accuracy improved by 92%',
      'Inspection throughput increased 5×',
      'Annual prevention of ~$400,000 in potential recall costs']
    
    },
    {
      id: 2,
      title: 'Real-Time Surgical Tool Tracking for Optimized Efficiency & Safety',
      client: 'Medical device manufacturer',
      category: 'Medical Devices',
      challenge: 'Manual tool tracking caused errors and delays in OR prep.',
      solution: 'AI-based tool detection on edge devices with automatic logging.',
      results: ['99% detection accuracy', '15 minutes saved per procedure', 'Reduced counting errors']
    },
    {
      id: 3,
      title: 'Real-Time Sensory-Motor Activity Tracking for Speed Recovery',
      client: 'Sports training company',
      category: 'Sports & Rehabilitation',
      challenge: 'Return athletes lacked precise feedback on movement mechanics.',
      solution: 'Video analysis helps to track and quantify joint angles and provide automated recommendations.',
      results: ['Real-time feedback', '20% reduction in injury rates', 'Improved athlete retention']
    },
    {
      id: 4,
      title: 'Streamlining Compliance & Documentation with LLM-Powered Workflow Automation',
      client: 'Medical manufacturing company',
      category: 'Operational Workflows',
      challenge: 'Regulatory reporting and internal audits required extensive manual review of production logs, slowing down compliance processes and increasing the risk of costly errors.',
      solution: 'Developed a Large Language Model-powered workflow automation system that automatically extracts key data from production logs, summarizes deviations, and drafts preliminary FDA/ISO compliance reports. Integrated with existing ERP systems for seamless operation.',
      results: [
        '80% reduction in time spent on compliance reporting',
        'Increased audit readiness with near real-time reporting',
        'Estimated $250,000 annual savings in labor costs'
      ]
    }
  ]
}
