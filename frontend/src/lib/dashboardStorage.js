const MISSING_ALERTS_KEY = 'dashboard_missing_person_alerts';
const BUSINESS_ADS_KEY = 'dashboard_business_ads';

function safeParse(value) {
  if (!value) return [];

  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

function readItems(key) {
  return safeParse(localStorage.getItem(key));
}

function saveItems(key, items) {
  localStorage.setItem(key, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent('dashboard-data-change'));
}

export function getSavedMissingAlerts() {
  return readItems(MISSING_ALERTS_KEY);
}

export function saveMissingAlert(alert) {
  const items = getSavedMissingAlerts();
  const savedAlert = {
    ...alert,
    id: alert.id || `local-missing-${Date.now()}`,
    status: alert.status || 'Submitted for review',
    submitted_at: alert.submitted_at || new Date().toISOString(),
  };

  saveItems(MISSING_ALERTS_KEY, [savedAlert, ...items]);
  return savedAlert;
}

export function getSavedBusinessAds() {
  return readItems(BUSINESS_ADS_KEY);
}

export function saveBusinessAd(ad) {
  const items = getSavedBusinessAds();
  const savedAd = {
    ...ad,
    id: ad.id || `local-ad-${Date.now()}`,
    status: ad.status || 'Submitted for review/payment',
    submitted_at: ad.submitted_at || new Date().toISOString(),
  };

  saveItems(BUSINESS_ADS_KEY, [savedAd, ...items]);
  return savedAd;
}

export function getMonthlyMissingAlertCount() {
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  return getSavedMissingAlerts().filter((alert) => {
    const submittedAt = new Date(alert.submitted_at);
    return submittedAt.getMonth() === currentMonth && submittedAt.getFullYear() === currentYear;
  }).length;
}