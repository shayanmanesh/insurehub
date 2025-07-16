export interface InsuranceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  slug: string;
  benefits: string[];
  providers: string[];
  commonQuestions: { question: string; answer: string }[];
}

export const insuranceCategories: InsuranceCategory[] = [
  {
    id: 'health',
    name: 'Health Insurance',
    description: 'Comprehensive coverage for medical expenses and healthcare services',
    icon: 'Heart',
    slug: 'health-insurance',
    benefits: [
      'Medical expenses coverage',
      'Prescription drug coverage',
      'Preventive care services',
      'Emergency medical services'
    ],
    providers: [
      'Blue Cross Blue Shield',
      'UnitedHealthcare',
      'Anthem',
      'Aetna',
      'Cigna',
      'Humana'
    ],
    commonQuestions: [
      {
        question: 'What does health insurance cover?',
        answer: 'Health insurance typically covers medical expenses, prescription drugs, preventive care, and emergency services depending on your plan.'
      },
      {
        question: 'When can I enroll in health insurance?',
        answer: 'You can enroll during open enrollment periods or after qualifying life events like marriage or job loss.'
      },
      {
        question: 'What is a deductible?',
        answer: 'A deductible is the amount you pay out-of-pocket before your insurance coverage kicks in.'
      }
    ]
  },
  {
    id: 'auto',
    name: 'Auto Insurance',
    description: 'Protection for your vehicle and coverage for accidents and damages',
    icon: 'Car',
    slug: 'auto-insurance',
    benefits: [
      'Collision coverage',
      'Comprehensive coverage',
      'Liability protection',
      'Personal injury protection'
    ],
    providers: [
      'State Farm',
      'GEICO',
      'Progressive',
      'Allstate',
      'USAA',
      'Liberty Mutual'
    ],
    commonQuestions: [
      {
        question: 'What factors affect auto insurance rates?',
        answer: 'Driving record, age, vehicle type, location, and credit score can all impact your auto insurance premiums.'
      },
      {
        question: 'What is liability coverage?',
        answer: 'Liability coverage pays for damages you cause to others in an accident, including property damage and bodily injury.'
      },
      {
        question: 'Do I need comprehensive coverage?',
        answer: 'Comprehensive coverage is optional but recommended if you have a newer vehicle or live in an area prone to theft or natural disasters.'
      }
    ]
  },
  {
    id: 'home',
    name: 'Home Insurance',
    description: 'Coverage for your home structure, belongings, and personal liability',
    icon: 'Home',
    slug: 'home-insurance',
    benefits: [
      'Dwelling coverage',
      'Personal property protection',
      'Liability coverage',
      'Additional living expenses'
    ],
    providers: [
      'State Farm',
      'Allstate',
      'USAA',
      'Liberty Mutual',
      'Farmers',
      'Travelers'
    ],
    commonQuestions: [
      {
        question: 'What does homeowners insurance cover?',
        answer: 'Homeowners insurance typically covers your home structure, personal belongings, liability, and additional living expenses if you need to relocate temporarily.'
      },
      {
        question: 'How much coverage do I need?',
        answer: 'Coverage should be enough to rebuild your home and replace your belongings. Consider 80% of your home\'s replacement value as a minimum.'
      },
      {
        question: 'What is not covered by homeowners insurance?',
        answer: 'Floods, earthquakes, normal wear and tear, and business-related losses typically require separate coverage.'
      }
    ]
  },
  {
    id: 'life',
    name: 'Life Insurance',
    description: 'Financial protection for your loved ones in case of your death',
    icon: 'Shield',
    slug: 'life-insurance',
    benefits: [
      'Death benefit coverage',
      'Income replacement',
      'Debt and mortgage protection',
      'Estate planning benefits'
    ],
    providers: [
      'Northwestern Mutual',
      'MetLife',
      'Prudential',
      'New York Life',
      'MassMutual',
      'Lincoln Financial'
    ],
    commonQuestions: [
      {
        question: 'How much life insurance do I need?',
        answer: 'A common rule is 10-12 times your annual income, but consider your debts, dependents, and financial goals.'
      },
      {
        question: 'What is the difference between term and whole life insurance?',
        answer: 'Term life provides coverage for a specific period, while whole life provides permanent coverage with a cash value component.'
      },
      {
        question: 'When should I buy life insurance?',
        answer: 'The best time is when you\'re young and healthy, as premiums are lower and you\'re more likely to qualify for coverage.'
      }
    ]
  },
  {
    id: 'business',
    name: 'Business Insurance',
    description: 'Protection for your business operations, assets, and employees',
    icon: 'Building',
    slug: 'business-insurance',
    benefits: [
      'General liability coverage',
      'Property insurance',
      'Workers compensation',
      'Professional liability'
    ],
    providers: [
      'State Farm',
      'Progressive',
      'The Hartford',
      'Travelers',
      'Liberty Mutual',
      'Nationwide'
    ],
    commonQuestions: [
      {
        question: 'What types of business insurance do I need?',
        answer: 'Most businesses need general liability, property insurance, and workers compensation. Professional liability may also be required depending on your industry.'
      },
      {
        question: 'How much does business insurance cost?',
        answer: 'Costs vary based on business size, industry, location, and coverage needs. Small businesses typically pay $500-$3,000 annually for basic coverage.'
      },
      {
        question: 'When do I need workers compensation insurance?',
        answer: 'Most states require workers compensation if you have employees, though requirements vary by state and industry.'
      }
    ]
  }
];