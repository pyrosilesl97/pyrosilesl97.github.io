import type { LanguageCode, Translation } from './types';
import { en } from './en';
import { es } from './es';
import { de } from './de';
import { ja } from './ja';
import { zh } from './zh';

export const translations: Record<LanguageCode, Translation> = { en, es, de, ja, zh };

export { LANGUAGES, LANGUAGE_META } from './types';
export type { LanguageCode, Translation } from './types';
