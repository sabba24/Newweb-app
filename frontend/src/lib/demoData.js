import { SUPPORTED_COUNTRIES } from './countryContext';

export const parishes = [
  'Kingston',
  'St. Andrew',
  'St. Catherine',
  'Clarendon',
  'Manchester',
  'St. Elizabeth',
  'Westmoreland',
  'Hanover',
  'St. James',
  'Trelawny',
  'St. Ann',
  'St. Mary',
  'Portland',
  'St. Thomas',
];

export const countryRegions = SUPPORTED_COUNTRIES.reduce((regions, country) => {
  regions[country.code] = country.regions;
  return regions;
}, {});

export const countryMissingStats = SUPPORTED_COUNTRIES.map((country) => ({
  country: country.name,
  countryCode: country.code,
  flag: country.flag,
  total: country.totalMissingReports,
}));

const countryByCode = (code) => SUPPORTED_COUNTRIES.find((country) => country.code === code) || SUPPORTED_COUNTRIES[0];

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const daysAgo = (days) => new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

const femalePortraits = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=90',
];

const malePortraits = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90',
];

const namesByCountry = {
  JM: [['Aaliyah Brown', 14, 'female'], ['Dwayne Campbell', 28, 'male'], ['Shanice Johnson', 22, 'female']],
  US: [['Maya Johnson', 16, 'female'], ['Ethan Miller', 31, 'male'], ['Sofia Ramirez', 24, 'female']],
  CA: [['Olivia Chen', 19, 'female'], ['Noah Thompson', 35, 'male'], ['Amara Singh', 27, 'female']],
  GB: [['Emily Clarke', 21, 'female'], ['Oliver Hughes', 42, 'male'], ['Aisha Khan', 18, 'female']],
  PA: [['Valeria Torres', 17, 'female'], ['Mateo Castillo', 29, 'male'], ['Camila Ríos', 23, 'female']],
  TT: [['Anika Mohammed', 20, 'female'], ['Jamal Baptiste', 33, 'male'], ['Leah Singh', 15, 'female']],
  BB: [['Renee Alleyne', 26, 'female'], ['Malik Clarke', 37, 'male'], ['Tia Small', 16, 'female']],
  BS: [['Brianna Rolle', 18, 'female'], ['Devon Sands', 41, 'male'], ['Kayla Forbes', 25, 'female']],
  GY: [['Priya Persaud', 23, 'female'], ['Andre Singh', 34, 'male'], ['Natasha Williams', 29, 'female']],
  IN: [['Ananya Sharma', 18, 'female'], ['Arjun Patel', 32, 'male'], ['Meera Nair', 24, 'female']],
  NG: [['Ada Okafor', 20, 'female'], ['Tunde Balogun', 39, 'male'], ['Zainab Musa', 17, 'female']],
  GH: [['Ama Mensah', 22, 'female'], ['Kwame Boateng', 36, 'male'], ['Efua Owusu', 19, 'female']],
  PH: [['Maria Santos', 16, 'female'], ['Jose Reyes', 30, 'male'], ['Angel Cruz', 21, 'female']],
  BR: [['Ana Silva', 19, 'female'], ['Lucas Oliveira', 38, 'male'], ['Mariana Costa', 25, 'female']],
  MX: [['Isabella Hernández', 17, 'female'], ['Diego Morales', 33, 'male'], ['Lucía García', 26, 'female']],
};

const descriptions = [
  'Family members are asking the public to share any verified sightings with authorities.',
  'Last seen wearing casual clothing and carrying a small backpack.',
  'Reported missing after leaving home and not returning by evening.',
  'Known to frequent nearby shops, transport centres, and community spaces.',
  'Relatives say this person may require medical attention and should be approached calmly.',
  'Anyone with information is urged to contact the listed number or the nearest police station.',
];

function photoFor(gender, index) {
  const portraits = gender === 'female' ? femalePortraits : malePortraits;
  return portraits[index % portraits.length];
}

let personId = 1000;

export const demoMissingPersons = SUPPORTED_COUNTRIES.flatMap((country, countryIndex) => {
  const names = namesByCountry[country.code] || namesByCountry.JM;

  return names.map(([name, age, gender], index) => {
    const region = country.regions[index % country.regions.length];
    const city = country.cities[index % country.cities.length];
    const id = personId++;
    const status = index === 0 ? 'urgent' : index === 2 ? 'located' : 'missing';

    return {
      id,
      slug: `${slugify(name)}-${id}`,
      name,
      age,
      country: country.name,
      countryCode: country.code,
      flag: country.flag,
      region,
      parish: region,
      city,
      location: city,
      last_seen_location: `${city} ${region}`,
      date_missing: daysAgo((countryIndex + index) % 21 + 1),
      photo_url: photoFor(gender, countryIndex + index),
      status,
      priority: index === 0,
      contact_number: `+${100 + countryIndex}-${String(200 + index * 37).padStart(3, '0')}-${String(1000 + countryIndex * 41 + index * 29).slice(0, 4)}`,
      description: descriptions[(countryIndex + index) % descriptions.length],
      report_tip_url: `mailto:tips@876alert.example?subject=Tip for ${encodeURIComponent(name)}`,
    };
  });
});

const adImages = [
  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=90',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=90',
];

export const sponsoredAds = SUPPORTED_COUNTRIES.map((country, index) => ({
  id: `ad-${country.code.toLowerCase()}-${index}`,
  type: 'ad',
  businessName: `${country.name} Safety Partners`,
  country: country.name,
  countryCode: country.code,
  flag: country.flag,
  region: country.regions[0],
  parish: country.regions[0],
  city: country.cities[0],
  location: country.cities[0],
  image: adImages[index % adImages.length],
  promo: `Emergency kits, verified transport, community support, and safety services available in ${country.cities[0]}.`,
  ctaLabel: index % 3 === 0 ? 'Shop Now' : index % 3 === 1 ? 'Learn More' : 'Call Now',
  ctaHref: index % 3 === 2 ? 'tel:8760000000' : '/advertise',
  badge: 'Paid Advertisement',
}));

export const priorityCarouselItems = SUPPORTED_COUNTRIES.flatMap((country) => {
  const priorityPerson = demoMissingPersons.find((person) => person.countryCode === country.code && person.priority);
  const ad = sponsoredAds.find((item) => item.countryCode === country.code);

  return [
    priorityPerson ? { id: `priority-${priorityPerson.slug}`, type: 'missing', personId: priorityPerson.id, countryCode: country.code } : null,
    ad,
  ].filter(Boolean);
});

const alertTypes = ['weather', 'missing person', 'traffic', 'community', 'safety'];
const alertImages = [
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
];

export const demoAlerts = SUPPORTED_COUNTRIES.flatMap((country, countryIndex) => [
  {
    id: 2000 + countryIndex * 2,
    title: `${country.name} Missing-Person Advisory`,
    message: `A priority missing-person notice is active in ${country.cities[0]}. Share only verified sightings with local authorities.`,
    severity: countryIndex % 4 === 0 ? 'critical' : 'warning',
    type: 'missing person',
    country: country.name,
    countryCode: country.code,
    flag: country.flag,
    region: country.regions[0],
    parish: country.regions[0],
    city: country.cities[0],
    location: country.cities[0],
    timestamp: daysAgo(countryIndex * 0.12 + 0.1),
    image: alertImages[(countryIndex + 1) % alertImages.length],
  },
  {
    id: 2001 + countryIndex * 2,
    title: `${country.regions[1] || country.regions[0]} Safety Update`,
    message: `Community responders are monitoring ${country.cities[1] || country.cities[0]} for public safety activity and travel advisories.`,
    severity: countryIndex % 3 === 0 ? 'warning' : 'info',
    type: alertTypes[countryIndex % alertTypes.length],
    country: country.name,
    countryCode: country.code,
    flag: country.flag,
    region: country.regions[1] || country.regions[0],
    parish: country.regions[1] || country.regions[0],
    city: country.cities[1] || country.cities[0],
    location: country.cities[1] || country.cities[0],
    timestamp: daysAgo(countryIndex * 0.16 + 0.2),
    image: alertImages[countryIndex % alertImages.length],
  },
]);

export const safetyTips = [
  'Call official emergency services first when there is immediate danger.',
  'Share only verified sightings and avoid reposting rumours.',
  'Keep recent photos, medical details, and emergency contacts accessible.',
  'If you see a missing person, contact authorities before approaching.',
  'Avoid sharing sensitive addresses publicly unless authorities request it.',
  'Travel with a trusted contact when assisting with community searches.',
  'Take screenshots of suspicious messages and report them to authorities.',
  'Check on elderly neighbours during storms, floods, and heat waves.',
];

export const emergencyResources = [
  { label: 'Police Emergency', value: '119', detail: 'Report urgent threats, crimes, and verified sightings.' },
  { label: 'Fire / Ambulance', value: '110', detail: 'Fire, rescue, and medical emergencies.' },
  { label: 'Child Protection', value: '211', detail: 'Child safety support and guidance.' },
  { label: 'Disaster Preparedness', value: 'ODPEM', detail: 'Storm, flood, earthquake, and evacuation guidance.' },
];