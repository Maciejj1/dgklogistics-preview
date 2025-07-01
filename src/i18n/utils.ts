import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
    const basePath = '/dgklogistics-preview';
    const pathWithoutBase = url.pathname.replace(basePath, '');
    const pathParts = pathWithoutBase.split('/').filter(part => part);
    const lang = pathParts[0];
    if (lang && lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof typeof ui[typeof defaultLang]) {
        return key in ui[lang] ? (ui[lang] as any)[key] : ui[defaultLang][key];
    }
}

export function t(lang: keyof typeof ui, key: string): string {
    if (!ui[lang]) return key;
    if (!ui[lang][key as keyof typeof ui[typeof defaultLang]]) {
        return ui[defaultLang][key as keyof typeof ui[typeof defaultLang]] || key;
    }
    return ui[lang][key as keyof typeof ui[typeof defaultLang]];
}