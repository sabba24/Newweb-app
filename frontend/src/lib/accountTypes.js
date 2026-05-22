export const ACCOUNT_TYPE_STORAGE_KEY = 'account_type';

export const accountTypeLabels = {
  personal_free: 'Personal Free',
  personal_pro: 'Personal Pro',
  business: 'Business Account',
  agency: 'Police / Agency',
  admin: 'Admin',
};

export function normalizeAccountType(value) {
  const normalized = String(value || '').trim().toLowerCase();

  if (['personal_pro', 'personal-pro', 'pro', 'personal paid'].includes(normalized)) {
    return 'personal_pro';
  }

  if (['business', 'business_account', 'business-account'].includes(normalized)) {
    return 'business';
  }

  if (['agency', 'police', 'police_agency', 'police-agency', 'police / agency'].includes(normalized)) {
    return 'agency';
  }

  if (['admin', 'administrator', 'sysadmin'].includes(normalized)) {
    return 'admin';
  }

  return 'personal_free';
}

export function getStoredAccountType() {
  return normalizeAccountType(localStorage.getItem(ACCOUNT_TYPE_STORAGE_KEY));
}

export function setStoredAccountType(value) {
  const accountType = normalizeAccountType(value);
  localStorage.setItem(ACCOUNT_TYPE_STORAGE_KEY, accountType);
  window.dispatchEvent(new CustomEvent('account-type-change', { detail: accountType }));
  return accountType;
}

export function getAccountLabel(value) {
  return accountTypeLabels[normalizeAccountType(value)];
}

export function getAccountGroup(value) {
  const accountType = normalizeAccountType(value);

  if (accountType === 'agency' || accountType === 'admin') return 'agency';
  if (accountType === 'business') return 'business';

  return 'personal';
}

export function getAccountTypeFromAuthPayload(payload) {
  return normalizeAccountType(
    payload?.user?.account_type ||
      payload?.user?.role ||
      payload?.account_type ||
      payload?.role ||
      localStorage.getItem(ACCOUNT_TYPE_STORAGE_KEY)
  );
}

export function saveAccountTypeFromAuthPayload(payload) {
  const accountValue = payload?.user?.account_type || payload?.user?.role || payload?.account_type || payload?.role;

  if (accountValue) {
    return setStoredAccountType(accountValue);
  }

  return getStoredAccountType();
}