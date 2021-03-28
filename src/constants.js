export const API_BASE_URL = 'http://localhost:8000/api/';
export const RAZOR_PAY_KEY = 'rzp_test_ze2NdJ9nokr6qc';
// export const API_BASE_URL = 'https://api.ourprint.in/api/';
// export const RAZOR_PAY_KEY = 'rzp_live_2hHxvmoZPbKYDz';
export const NAVIGATION_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Subscriptions', path: '/subscriptions' },
    { name: 'Bookings', path: '/bookings' },
    { name: 'Privacy', path: '/privacy' },
    { name: 'Terms', path: '/terms' },
];
export const AppConstants = {
    contentType: {
        contentTypeKey: 'Content-Type',
        applicationJson: 'application/json',
    },
}

export const ORDER_TYPE = {
    STANDARD: 'standard_print',
    OFFICIAL_DOCUMENTS: 'official_documents',
    SUBSCRIPTION: 'subscription',
}
export const ORDER_CONFIG = {
    BOND_PAPER: 'Bond Paper (100gsm)',
    BW: 'Black and White',
    ONE_SIDED: 'One-Sided',
    TWO_SIDED: 'Two-Sided',
    COLOR: 'Color',
    MULTI_COLOR: 'Multicolor',
    SPIRAL_BINDING: 'Spiral Binding',
}


export const OCCUPATION = ['NA',
    'Professional',
    'Household',
    'Self-employed',
    'Others'
]

export const COURSE = {
    'NA': [],
    'SCHOOLING': ['NA', 'High School', ' 1-7 th class', 'Kinder Garden'],
    'INTERMEDIATE': ['NA', 'MPC', 'BiPC', 'MEC'],
    'POLYTECHNIC / DIPLOMA': [
        'NA',
        'Automobile Engineering',
        'Aeronautical Engineering',
        'Aerospace Engineering',
        'Agriculture Engineering',
        'Art and Craft',
        'Biotechnology Engineering',
        'Computer Science Engineering',
        'Civil Engineering',
        'Chemical Engineering',
        'Ceramic Engineering',
        'Dairy Technology and Engineering',
        'Electronics and communication',
        'Electronics and Telecommunication Engineering',
        'Electrical Engineering',
        'Environmental Engineering',
        'Fashion Designing',
        '1Food Processing Engineering',
        'Genetic Engineering',
        'Interior Decoration',
        'Instrumentation and Control Engineering',
        'Infrastructure Engineering',
        'IT Engineering',
        'Metallurgy Engineering',
        'Motorsport Engineering',
        'Mechanical Engineering',
        'Mining Engineering',
        'Petroleum Engineering',
        'Plastics Engineering',
        'Power Engineering',
        'Production Engineering',
        'Textile Engineering',
        'Others',
    ],
    'BACHELORS': [
        'NA',
        'Automobile Engineering (AUTO)',
        'Aeronautical Engineering (AERO)',
        'Bio Technology Engineering (BTE)',
        'Civil Engineering (CE)',
        'Chemical Engineering (CHEM)',
        'Computer Science and Engineering (CSE)',
        'Electrical and Electronics Engineering (EEE)',
        'Electronics and Communications Engineering (ECE)',
        'Electronics and Instrumentation Engineering (EIE)',
        'Information Technology (IT)',
        'Mechanical Engineering (MECH)',
        'Metallurgical Engineering (MET)',
        'Others',
    ],
    'M.TECH / M.SC': [],
    'MEDICINE': ['NA', 'MBBS', 'OTHERS'],
    'Dental': [],
    'PHARMACY': ['NA', 'B-Pharm', 'M-Pharm'],
    'DEGREE': [
        'NA',
        'B.Com',
        'B.Sc',
        'BBA',
        'Charted Accountants course: CA – CPT & IPCC',
        'BA',
        'LLB',
        'MCA',
        'MBA',
        'Others',
    ],
    'OTHERS': [],
};

export const COLLEGE_YEAR = ['NA', '1', '2', '3', '4', '5'];
export const COLLEGE_SEM = ['NA', '1', '2'];