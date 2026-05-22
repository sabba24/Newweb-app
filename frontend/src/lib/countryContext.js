export const SELECTED_COUNTRY_STORAGE_KEY = 'selected_country_code';

export const SUPPORTED_COUNTRIES = [
  {
    code: 'JM',
    name: 'Jamaica',
    flag: '🇯🇲',
    totalMissingReports: 1240,
    regions: ['Kingston', 'St. Andrew', 'St. Catherine', 'Clarendon', 'Manchester', 'St. James'],
    cities: ['Kingston', 'Spanish Town', 'Montego Bay'],
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    totalMissingReports: 8450,
    regions: ['Florida', 'New York', 'Texas', 'California', 'Georgia', 'Illinois'],
    cities: ['Miami', 'New York City', 'Houston'],
  },
  {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    totalMissingReports: 1980,
    regions: ['Ontario', 'Quebec', 'British Columbia', 'Alberta', 'Manitoba'],
    cities: ['Toronto', 'Montreal', 'Vancouver'],
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    totalMissingReports: 2750,
    regions: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
    cities: ['London', 'Manchester', 'Birmingham'],
  },
  {
    code: 'PA',
    name: 'Panama',
    flag: '🇵🇦',
    totalMissingReports: 640,
    regions: ['Panamá', 'Colón', 'Chiriquí', 'Coclé'],
    cities: ['Panama City', 'Colón', 'David'],
  },
  {
    code: 'TT',
    name: 'Trinidad and Tobago',
    flag: '🇹🇹',
    totalMissingReports: 520,
    regions: ['Port of Spain', 'San Fernando', 'Chaguanas', 'Tobago'],
    cities: ['Port of Spain', 'San Fernando', 'Scarborough'],
  },
  {
    code: 'BB',
    name: 'Barbados',
    flag: '🇧🇧',
    totalMissingReports: 210,
    regions: ['Christ Church', 'Saint Michael', 'Saint James', 'Saint Philip'],
    cities: ['Bridgetown', 'Oistins', 'Holetown'],
  },
  {
    code: 'BS',
    name: 'Bahamas',
    flag: '🇧🇸',
    totalMissingReports: 390,
    regions: ['New Providence', 'Grand Bahama', 'Abaco', 'Exuma'],
    cities: ['Nassau', 'Freeport', 'Marsh Harbour'],
  },
  {
    code: 'GY',
    name: 'Guyana',
    flag: '🇬🇾',
    totalMissingReports: 460,
    regions: ['Demerara-Mahaica', 'Berbice', 'Essequibo Islands', 'Upper Takutu'],
    cities: ['Georgetown', 'New Amsterdam', 'Lethem'],
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    totalMissingReports: 15400,
    regions: ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'West Bengal'],
    cities: ['Mumbai', 'Delhi', 'Bengaluru'],
  },
  {
    code: 'NG',
    name: 'Nigeria',
    flag: '🇳🇬',
    totalMissingReports: 6820,
    regions: ['Lagos', 'Abuja', 'Rivers', 'Kano', 'Oyo'],
    cities: ['Lagos', 'Abuja', 'Port Harcourt'],
  },
  {
    code: 'GH',
    name: 'Ghana',
    flag: '🇬🇭',
    totalMissingReports: 1490,
    regions: ['Greater Accra', 'Ashanti', 'Central', 'Western'],
    cities: ['Accra', 'Kumasi', 'Cape Coast'],
  },
  {
    code: 'PH',
    name: 'Philippines',
    flag: '🇵🇭',
    totalMissingReports: 3720,
    regions: ['Metro Manila', 'Cebu', 'Davao', 'Calabarzon'],
    cities: ['Manila', 'Cebu City', 'Davao City'],
  },
  {
    code: 'BR',
    name: 'Brazil',
    flag: '🇧🇷',
    totalMissingReports: 9100,
    regions: ['São Paulo', 'Rio de Janeiro', 'Bahia', 'Paraná'],
    cities: ['São Paulo', 'Rio de Janeiro', 'Salvador'],
  },
  {
    code: 'MX',
    name: 'Mexico',
    flag: '🇲🇽',
    totalMissingReports: 11800,
    regions: ['Mexico City', 'Jalisco', 'Nuevo León', 'Yucatán'],
    cities: ['Mexico City', 'Guadalajara', 'Monterrey'],
  },
];

export function getSelectedCountryCode() {
  return localStorage.getItem(SELECTED_COUNTRY_STORAGE_KEY) || 'JM';
}

export function getCountryByCode(code) {
  return SUPPORTED_COUNTRIES.find((country) => country.code === code) || SUPPORTED_COUNTRIES[0];
}

export function getSelectedCountry() {
  return getCountryByCode(getSelectedCountryCode());
}

export function setSelectedCountryCode(code) {
  const nextCode = getCountryByCode(code).code;
  localStorage.setItem(SELECTED_COUNTRY_STORAGE_KEY, nextCode);
  window.dispatchEvent(new CustomEvent('country-change', { detail: nextCode }));
  return nextCode;
}