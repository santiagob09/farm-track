import i18n from 'i18next';

// "Installation" es el nombre interno del tipo de objeto (lo usan el backend,
// el dashboard y el chatbot). Algunos usuarios lo crearon como "Instalación" o
// "Instalacion". Para mostrarlo en pantalla se traduce según el idioma.
export const isInstallationType = (name?: string | null): boolean =>
  !!name && /^instal/i.test(name.trim());

export const typeOfObjectLabel = (name?: string | null): string => {
  if (!name) return '';
  if (isInstallationType(name)) {
    const lang = (i18n.language || 'es').toLowerCase();
    return lang.startsWith('en') ? 'Installation' : 'Instalación';
  }
  return name;
};
