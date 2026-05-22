import { useContext } from 'react';
import { I18nContext } from '../components/I18nProvider';

export default function useTranslation() {
  return useContext(I18nContext);
}