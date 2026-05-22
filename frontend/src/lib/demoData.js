export const parishes = [
  'Kingston', 'St. Andrew', 'St. Catherine', 'Clarendon', 'Manchester', 'St. Elizabeth',
  'Westmoreland', 'Hanover', 'St. James', 'Trelawny', 'St. Ann', 'St. Mary', 'Portland', 'St. Thomas'
];

export const demoMissingPersons = [
  {
    id: 101,
    name: 'Aaliyah Brown',
    age: 14,
    last_seen_location: 'Kingston',
    date_missing: new Date(Date.now() - 3*24*3600*1000).toISOString(),
    photo_url: '/src/assets/person1.svg',
    status: 'missing',
    description: 'Last seen near Half-Way-Tree Mall wearing a green top.',
  },
  {
    id: 102,
    name: 'Dwayne Campbell',
    age: 28,
    last_seen_location: 'Montego Bay',
    date_missing: new Date(Date.now() - 7*24*3600*1000).toISOString(),
    photo_url: '/src/assets/person2.svg',
    status: 'missing',
    description: 'Family is seeking any information regarding whereabouts.',
  },
  {
    id: 103,
    name: 'Shanice Johnson',
    age: 22,
    last_seen_location: 'Portmore',
    date_missing: new Date(Date.now() - 10*24*3600*1000).toISOString(),
    photo_url: '/src/assets/person3.svg',
    status: 'missing',
    description: 'Reported missing after not returning from work.',
  },
  {
    id: 104,
    name: 'Omar Williams',
    age: 34,
    last_seen_location: 'Spanish Town',
    date_missing: new Date(Date.now() - 2*24*3600*1000).toISOString(),
    photo_url: '/src/assets/person1.svg',
    status: 'missing',
    description: 'Last seen wearing a white shirt and jeans near bus terminal.',
  },
  {
    id: 105,
    name: 'Keisha Morgan',
    age: 19,
    last_seen_location: 'Ocho Rios',
    date_missing: new Date(Date.now() - 5*24*3600*1000).toISOString(),
    photo_url: '/src/assets/person2.svg',
    status: 'missing',
    description: 'Went missing after leaving summer job downtown.',
  },
  {
    id: 106,
    name: 'Andre Blake',
    age: 41,
    last_seen_location: 'Mandeville',
    date_missing: new Date(Date.now() - 1*24*3600*1000).toISOString(),
    photo_url: '/src/assets/person3.svg',
    status: 'missing',
    description: 'Family concerned; last phone ping near Ward Ave.',
  },
];

export const demoAlerts = [
  {
    id: 201,
    title: 'Severe Weather Warning',
    message: 'Heavy rains expected across eastern parishes. Stay alert and avoid flooded areas.',
    severity: 'warning',
    image: '/src/assets/alert-weather.svg',
  },
  {
    id: 202,
    title: 'Amber Alert',
    message: 'Missing child reported in St. Catherine. If you have information call 119.',
    severity: 'critical',
    image: '/src/assets/alert-amber.svg',
  },
  {
    id: 203,
    title: 'Traffic Advisory',
    message: 'Accident on North-South Highway causing major delays. Seek alternate routes.',
    severity: 'info',
    image: '/src/assets/alert-traffic.svg',
  },
];

export const safetyTips = [
  'Always share your route and ETA with a trusted contact.',
  'Keep emergency numbers (119, 110) saved and accessible.',
  'Avoid poorly lit areas at night and travel in groups when possible.',
  'Report suspicious activity immediately to local authorities.',
];
