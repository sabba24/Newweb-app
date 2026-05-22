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

const photoFor = (gender, imageId) => {
  const portraits = gender === 'female' ? femalePortraits : malePortraits;
  return portraits[imageId % portraits.length];
};

const profileSeeds = [
  ['Aaliyah Brown', 14, 'Kingston', 'Half-Way-Tree Transport Centre', 'female', 12, 'missing', true],
  ['Dwayne Campbell', 28, 'St. James', 'Barnett Street, Montego Bay', 'male', 22, 'missing', false],
  ['Shanice Johnson', 22, 'St. Catherine', 'Portmore Pines', 'female', 30, 'missing', true],
  ['Omar Williams', 34, 'St. Catherine', 'Spanish Town Bus Terminal', 'male', 34, 'missing', false],
  ['Keisha Morgan', 19, 'St. Ann', 'Ocho Rios Market', 'female', 44, 'missing', false],
  ['Andre Blake', 41, 'Manchester', 'Ward Avenue, Mandeville', 'male', 45, 'missing', false],
  ['Tamara Reid', 31, 'Clarendon', 'May Pen town centre', 'female', 56, 'missing', false],
  ['Nicholas Grant', 16, 'St. Andrew', 'Papine Square', 'male', 16, 'missing', false],
  ['Latoya Henry', 27, 'Westmoreland', 'Savanna-la-Mar hospital area', 'female', 63, 'located', true],
  ['Kevon Miller', 12, 'Kingston', 'Downtown Parade', 'male', 51, 'urgent', true],
  ['Janelle Thompson', 35, 'Hanover', 'Lucea waterfront', 'female', 71, 'missing', false],
  ['Ricardo Ellis', 44, 'St. Elizabeth', 'Black River main road', 'male', 57, 'missing', false],
  ['Monique Foster', 25, 'Trelawny', 'Falmouth pier', 'female', 2, 'missing', false],
  ['Rohan McKenzie', 52, 'Portland', 'Port Antonio taxi stand', 'male', 5, 'missing', false],
  ['Brianna Clarke', 17, 'St. Mary', 'Highgate community centre', 'female', 5, 'urgent', true],
  ['Jason Patterson', 29, 'St. Thomas', 'Morant Bay courthouse area', 'male', 18, 'missing', false],
  ['Nadine Robinson', 39, 'Kingston', 'Cross Roads', 'female', 26, 'missing', false],
  ['Tyrone Bennett', 21, 'St. James', 'Fairview Shopping Centre', 'male', 26, 'missing', false],
  ['Sasha Gordon', 15, 'St. Catherine', 'Old Harbour Bay', 'female', 32, 'urgent', true],
  ['Damian Powell', 37, 'Clarendon', 'Mineral Heights', 'male', 37, 'missing', false],
  ['Chantel Davis', 24, 'Manchester', 'Northern Caribbean University gate', 'female', 37, 'missing', false],
  ['Jerome Walters', 33, 'St. Elizabeth', 'Santa Cruz taxi park', 'male', 40, 'missing', false],
  ['Simone Palmer', 42, 'Westmoreland', 'Negril town centre', 'female', 42, 'missing', false],
  ['Akeem Bailey', 18, 'Hanover', 'Green Island main road', 'male', 41, 'missing', false],
  ['Tanesha Smith', 30, 'St. Ann', 'Runaway Bay service station', 'female', 45, 'located', false],
  ['Malik Anderson', 13, 'St. Andrew', 'Liguanea Plaza', 'male', 47, 'urgent', true],
  ['Khadija Lawrence', 20, 'Portland', 'Buff Bay square', 'female', 48, 'missing', false],
  ['Wayne Morris', 55, 'Kingston', 'Heroes Circle', 'male', 48, 'missing', false],
  ['Danielle Stewart', 26, 'Trelawny', 'Duncans main road', 'female', 49, 'missing', false],
  ['Romaine Francis', 32, 'St. Mary', 'Annotto Bay bus stop', 'male', 50, 'missing', false],
];

const descriptions = [
  'Family members are asking the public to share any verified sightings with authorities.',
  'Last seen wearing casual clothing and carrying a small backpack.',
  'Reported missing after leaving home and not returning by evening.',
  'Known to frequent nearby shops, transport centres, and community spaces.',
  'Relatives say this person may require medical attention and should be approached calmly.',
  'Anyone with information is urged to contact the listed number or the nearest police station.',
];

export const demoMissingPersons = profileSeeds.map(([name, age, parish, lastSeen, gender, imageId, status, priority], index) => ({
  id: 1000 + index,
  slug: `${slugify(name)}-${1000 + index}`,
  name,
  age,
  parish,
  last_seen_location: lastSeen,
  date_missing: daysAgo((index % 21) + 1),
  photo_url: photoFor(gender, imageId),
  status,
  priority,
  contact_number: `876-${String(200 + (index % 700)).padStart(3, '0')}-${String(1000 + index * 37).slice(0, 4)}`,
  description: descriptions[index % descriptions.length],
  report_tip_url: `mailto:tips@876alert.example?subject=Tip for ${encodeURIComponent(name)}`,
}));

export const sponsoredAds = [
  {
    id: 'ad-kingston-safety-mart',
    type: 'ad',
    businessName: 'Kingston Safety Mart',
    parish: 'Kingston',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=90',
    promo: 'Emergency kits, flashlights, radios, and first-aid supplies for families and community teams.',
    ctaLabel: 'Shop Now',
    ctaHref: '/ads',
    badge: 'Paid Advertisement',
  },
  {
    id: 'ad-island-secure',
    type: 'ad',
    businessName: 'Island Secure Systems',
    parish: 'St. Andrew',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=90',
    promo: 'Affordable home cameras, panic buttons, and neighbourhood safety installations.',
    ctaLabel: 'Learn More',
    ctaHref: '/advertise',
    badge: 'Paid Advertisement',
  },
  {
    id: 'ad-route-safe-transport',
    type: 'ad',
    businessName: 'RouteSafe Transport',
    parish: 'St. Catherine',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=90',
    promo: 'Verified private transport for families, school pickups, and community search teams.',
    ctaLabel: 'Book Now',
    ctaHref: '/contact',
    badge: 'Paid Advertisement',
  },
  {
    id: 'ad-rapid-care-support',
    type: 'ad',
    businessName: 'RapidCare Support Jamaica',
    parish: 'St. James',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=90',
    promo: 'Emergency support supplies and response coordination for local events and businesses.',
    ctaLabel: 'Call Now',
    ctaHref: 'tel:8760000000',
    badge: 'Paid Advertisement',
  },
];

export const priorityCarouselItems = [
  { id: 'priority-aaliyah-brown', type: 'missing', personId: 1000 },
  sponsoredAds[0],
  { id: 'priority-shanice-johnson', type: 'missing', personId: 1002 },
  sponsoredAds[1],
  { id: 'priority-latoya-henry', type: 'missing', personId: 1008 },
  sponsoredAds[2],
  { id: 'priority-kevon-miller', type: 'missing', personId: 1009 },
  sponsoredAds[3],
  { id: 'priority-brianna-clarke', type: 'missing', personId: 1014 },
];

export const demoAlerts = [
  {
    id: 201,
    title: 'Flash Flood Warning',
    message: 'Heavy rainfall may cause flooding in low-lying areas. Avoid flooded roads and river crossings.',
    severity: 'critical',
    type: 'weather',
    parish: 'St. Thomas',
    timestamp: daysAgo(0.08),
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 202,
    title: 'Amber Alert: Child Missing',
    message: 'A child was last seen near Spanish Town. Call 119 immediately with verified information.',
    severity: 'critical',
    type: 'missing person',
    parish: 'St. Catherine',
    timestamp: daysAgo(0.18),
    image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 203,
    title: 'Major Traffic Advisory',
    message: 'Collision on North-South Highway causing long delays. Use alternate routes where possible.',
    severity: 'warning',
    type: 'traffic',
    parish: 'St. Ann',
    timestamp: daysAgo(0.26),
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 204,
    title: 'High Surf Advisory',
    message: 'Dangerous sea conditions expected along the north coast. Small craft operators should remain ashore.',
    severity: 'warning',
    type: 'weather',
    parish: 'Portland',
    timestamp: daysAgo(0.38),
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 205,
    title: 'Community Search Notice',
    message: 'Volunteers are coordinating a search near Mandeville. Please report only verified sightings.',
    severity: 'info',
    type: 'community',
    parish: 'Manchester',
    timestamp: daysAgo(0.55),
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 206,
    title: 'Road Closure',
    message: 'Sections of Washington Boulevard are temporarily closed for emergency works.',
    severity: 'info',
    type: 'traffic',
    parish: 'Kingston',
    timestamp: daysAgo(0.75),
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 207,
    title: 'Heat Safety Alert',
    message: 'Extreme heat conditions expected. Stay hydrated and check on elderly neighbours.',
    severity: 'warning',
    type: 'weather',
    parish: 'Clarendon',
    timestamp: daysAgo(1.1),
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 208,
    title: 'Public Safety Notice',
    message: 'Increased police presence around major transport hubs following reports of suspicious activity.',
    severity: 'info',
    type: 'safety',
    parish: 'St. Andrew',
    timestamp: daysAgo(1.35),
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80',
  },
];

export const safetyTips = [
  'Call 119 for police emergencies and 110 for fire or ambulance emergencies.',
  'Share only verified sightings and avoid reposting rumours.',
  'Keep recent photos, medical details, and emergency contacts accessible.',
  'If you see a missing person, contact authorities before approaching.',
  'Avoid sharing sensitive addresses publicly unless authorities request it.',
  'Travel with a trusted contact when assisting with community searches.',
  'Take screenshots of suspicious messages and report them to police.',
  'Check on elderly neighbours during storms, floods, and heat waves.',
];

export const emergencyResources = [
  { label: 'Police Emergency', value: '119', detail: 'Report urgent threats, crimes, and verified sightings.' },
  { label: 'Fire / Ambulance', value: '110', detail: 'Fire, rescue, and medical emergencies.' },
  { label: 'Child Protection', value: '211', detail: 'Child safety support and guidance.' },
  { label: 'Disaster Preparedness', value: 'ODPEM', detail: 'Storm, flood, earthquake, and evacuation guidance.' },
];