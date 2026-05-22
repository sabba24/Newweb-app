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

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const daysAgo = (days) => new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();

const portraits = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=90',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=90',
];

const namesByCountry = {
  JM: [['Aaliyah Brown', 14], ['Dwayne Campbell', 28], ['Shanice Johnson', 22]],
  US: [['Maya Johnson', 16], ['Ethan Miller', 31], ['Sofia Ramirez', 24]],
  CA: [['Olivia Chen', 19], ['Noah Thompson', 35], ['Amara Singh', 27]],
  GB: [['Emily Clarke', 21], ['Oliver Hughes', 42], ['Aisha Khan', 18]],
  PA: [['Valeria Torres', 17], ['Mateo Castillo', 29], ['Camila Ríos', 23]],
  TT: [['Anika Mohammed', 20], ['Jamal Baptiste', 33], ['Leah Singh', 15]],
  BB: [['Renee Alleyne', 26], ['Malik Clarke', 37], ['Tia Small', 16]],
  BS: [['Brianna Rolle', 18], ['Devon Sands', 41], ['Kayla Forbes', 25]],
  GY: [['Priya Persaud', 23], ['Andre Singh', 34], ['Natasha Williams', 29]],
  IN: [['Ananya Sharma', 18], ['Arjun Patel', 32], ['Meera Nair', 24]],
  NG: [['Ada Okafor', 20], ['Tunde Balogun', 39], ['Zainab Musa', 17]],
  GH: [['Ama Mensah', 22], ['Kwame Boateng', 36], ['Efua Owusu', 19]],
  PH: [['Maria Santos', 16], ['Jose Reyes', 30], ['Angel Cruz', 21]],
  BR: [['Ana Silva', 19], ['Lucas Oliveira', 38], ['Mariana Costa', 25]],
  MX: [['Isabella Hernández', 17], ['Diego Morales', 33], ['Lucía García', 26]],
};

const descriptions = [
  'Family members are asking the public to share any verified sightings with authorities.',
  'Last seen wearing casual clothing and carrying a small backpack.',
  'Reported missing after leaving home and not returning by evening.',
  'Known to frequent nearby shops, transport centres, and community spaces.',
  'Relatives say this person may require medical attention and should be approached calmly.',
  'Anyone with information is urged to contact the listed number or the nearest police station.',
];

let personId = 1000;

export const demoMissingPersons = SUPPORTED_COUNTRIES.flatMap((country, countryIndex) => {
  const names = namesByCountry[country.code] || namesByCountry.JM;

  return names.map(([name, age], index) => {
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
      photo_url: portraits[(countryIndex + index) % portraits.length],
      status,
      priority: index === 0,
      contact_number: `${country.phoneCode}-000-${String(1000 + countryIndex * 41 + index * 29).slice(0, 4)}`,
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