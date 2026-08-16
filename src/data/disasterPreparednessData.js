/**
 * Philippine Disaster Preparedness & Meteorological Standards
 * Based on DOST-PAGASA, NDRRMC, and DepEd Order No. 37 s. 2022 guidelines.
 */

export const tcwsSignalsDetail = [
  {
    signalNumber: 1,
    signalLabel: 'TCWS #1',
    windSpeed: '39 to 61 km/h',
    beaufortScale: 'Strong breeze to near gale',
    leadTime: '36 hours',
    seaCondition: 'Moderate to rough seas (waves 1.25m to 4.0m). Small seacrafts must take precautionary measures.',
    depedPolicy: 'In-person and online classes are automatically suspended from Kindergarten to Grade 12, as well as Alternative Learning System (ALS).',
    potentialDamage: 'Minimal to very light damage to high-risk structures. Unanchored makeshift roofs may be detached. Twigs of trees broken.',
    actionRequired: 'Inspect roof ties and structural supports. Clear drainage gutters. Monitor 6-hourly PAGASA public weather bulletins.',
  },
  {
    signalNumber: 2,
    signalLabel: 'TCWS #2',
    windSpeed: '62 to 88 km/h',
    beaufortScale: 'Gale to strong gale',
    leadTime: '24 hours',
    seaCondition: 'Rough to very rough seas (waves up to 5.0m). Sea travel is risky for all types of small seacraft and motorbancas.',
    depedPolicy: 'All basic education classes (K-12) suspended. LGU Mayors or Governors have discretionary authority to suspend college and tertiary levels.',
    potentialDamage: 'Minor to moderate damage to light structures. Galvanized iron roofs partially unroofed. Banana and agricultural crops tilted.',
    actionRequired: 'Secure loose outdoor items. Prepare your 72-hour Family Go-Bag. Charge mobile phones and power banks. Fisherfolk must return to port.',
  },
  {
    signalNumber: 3,
    signalLabel: 'TCWS #3',
    windSpeed: '89 to 117 km/h',
    beaufortScale: 'Storm to violent storm',
    leadTime: '18 hours',
    seaCondition: 'Very rough to high seas (waves exceeding 6.0m to 8.0m). Coastal storm surge of 1.0m to 2.0m is possible in low-lying coastal areas.',
    depedPolicy: 'Automatic suspension of all classes at all levels (Kindergarten, Elementary, High School, College, and Graduate School) as well as work in government offices (except frontline disaster response).',
    potentialDamage: 'Moderate to significant damage to structures of light to mixed construction. Heavy damage to agriculture. Power outages and cell tower disruptions likely.',
    actionRequired: 'Mandatory evacuation of residents along coastal shores, floodplains, and unstable mountain slopes. Stay indoors in sturdy concrete buildings.',
  },
  {
    signalNumber: 4,
    signalLabel: 'TCWS #4',
    windSpeed: '118 to 184 km/h',
    beaufortScale: 'Typhoon force',
    leadTime: '12 hours',
    seaCondition: 'Extremely high seas with severe storm surge potential of 2.1m to 3.0m. Massive coastal inundation expected.',
    depedPolicy: 'Total suspension of classes, non-essential work, and land/air/sea transportation networks.',
    potentialDamage: 'Significant to severe destruction. Plastered walls and roof trusses heavily damaged. Widespread blackouts and water service interruptions.',
    actionRequired: 'All evacuation operations must be completed immediately. Residents must remain inside designated reinforced evacuation centers.',
  },
  {
    signalNumber: 5,
    signalLabel: 'TCWS #5',
    windSpeed: '185 km/h or higher',
    beaufortScale: 'Super Typhoon force (Violent)',
    leadTime: '12 hours',
    seaCondition: 'Phenomenal seas with life-threatening storm surges exceeding 3.0 meters (up to 5.0m+ in enclosed bays, as in Leyte Gulf during Haiyan).',
    depedPolicy: 'Total state of emergency and complete suspension of all societal routines.',
    potentialDamage: 'Catastrophic and widespread destruction. Heavy structural failure of residential and commercial buildings. Complete electrical grid collapse.',
    actionRequired: 'Life-safety lockdown. Seek interior rooms away from exterior windows in high-strength concrete or multi-story reinforced evacuation centers.',
  },
]

export const goBagChecklistData = [
  {
    category: 'Water & Sustenance',
    items: [
      { id: 'water', text: 'Potable Drinking Water (at least 4 liters per person per day for 3 days)' },
      { id: 'food', text: 'Non-perishable ready-to-eat food (canned meats, energy bars, vacuum-sealed meals)' },
      { id: 'can-opener', text: 'Manual can opener and durable eating utensils' },
      { id: 'water-tabs', text: 'Water purification tablets or compact filtration straw' },
    ],
  },
  {
    category: 'First Aid & Health',
    items: [
      { id: 'first-aid', text: 'Comprehensive First Aid Kit (antiseptics, gauze, bandages, medical tape, scissors)' },
      { id: 'maintenance-meds', text: '7-day supply of personal maintenance medications (blood pressure, insulin, asthma inhalers)' },
      { id: 'hygiene', text: 'Sanitation items: wet wipes, alcohol (70%), soap, toothbrush, feminine products' },
      { id: 'masks', text: 'N95 or surgical face masks for protection against dust and debris' },
    ],
  },
  {
    category: 'Power, Lighting & Navigation',
    items: [
      { id: 'flashlight', text: 'Heavy-duty LED flashlight and extra batteries or hand-crank light' },
      { id: 'radio', text: 'Battery-powered or solar emergency AM/FM radio (essential when cellular towers fail)' },
      { id: 'powerbank', text: 'High-capacity power bank (20,000mAh+) fully charged with multiple USB cables' },
      { id: 'whistle', text: 'High-decibel emergency whistle for signaling search and rescue teams' },
    ],
  },
  {
    category: 'Vital Documents & Financial Security',
    items: [
      { id: 'waterproof-bag', text: 'Waterproof zippered pouch containing Birth Certificates, IDs, Passports, Land Titles, Insurance' },
      { id: 'cash', text: 'Emergency cash in small denominations (₱20, ₱50, ₱100, ₱500) and coins (ATMs will have no power)' },
      { id: 'emergency-contacts', text: 'Laminated card with emergency contact numbers (family, barangay, local MDRRMO)' },
    ],
  },
  {
    category: 'Protective Gear & Apparel',
    items: [
      { id: 'raincoat', text: 'Heavy-duty raincoat or waterproof poncho and sturdy work gloves' },
      { id: 'boots', text: 'Waterproof boots or closed-toe shoes to prevent leptospirosis from floodwaters' },
      { id: 'blanket', text: 'Compact emergency thermal foil blanket and complete change of dry clothes' },
    ],
  },
]

export const weatherFaqs = [
  {
    question: 'Why does the Philippines experience an average of 20 tropical cyclones every year?',
    answer:
      'The Philippine archipelago is situated in the northwestern Pacific Ocean, directly above the Western Pacific Warm Pool. This ocean basin maintains surface water temperatures consistently above 28°C to 30°C, providing the immense thermal energy and moisture required for tropical cyclogenesis. In addition, the Earth’s Coriolis force between latitudes 5°N and 20°N imparts the necessary spin for low-pressure systems to organize into rotating typhoons.',
  },
  {
    question: 'What is the difference between an International Name and a PAGASA Local Name?',
    answer:
      'The World Meteorological Organization (WMO) Typhoon Committee assigns international names (such as Haiyan, Rai, Gaemi, or Trami) contributed by 14 member nations. Separately, DOST-PAGASA assigns a domestic Philippine name (such as Yolanda, Odette, Carina, or Kristine) to every tropical cyclone that enters or develops within the Philippine Area of Responsibility (PAR) to make warnings more culturally recognizable and urgent for the Filipino public.',
  },
  {
    question: 'What is a Storm Surge and why is it so deadly?',
    answer:
      'A storm surge is an abnormal rise in sea level generated by the intense atmospheric low pressure and powerful onshore winds of a landfalling tropical cyclone. Storm surges can send walls of seawater 3 to 6 meters high several kilometers inland within minutes, completely submerging coastal settlements with devastating hydraulic force.',
  },
  {
    question: 'How do Habagat (Southwest Monsoon) and Amihan (Northeast Monsoon) affect storm intensity?',
    answer:
      'During the Habagat season (May to October), tropical cyclones passing northeast of Luzon can act as atmospheric pumps, drawing in vast moisture plumes from the South China Sea. This can trigger torrential, non-stop monsoon downpours and widespread urban flooding across Western Luzon and Metro Manila even if the typhoon’s center never makes direct landfall.',
  },
]
