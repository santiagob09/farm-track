// "Installation" es el nombre interno del tipo de objeto. Algunos usuarios lo
// crearon como "Instalación" o "Instalacion": se reconocen todas las variantes
// y en pantalla se muestra "Instalación".
export const isInstallationType = (name?: string | null): boolean =>
  !!name && /^instal/i.test(String(name).trim());

export const typeOfObjectLabel = (name?: string | null): string => {
  if (!name) return '';
  return isInstallationType(name) ? 'Instalación' : String(name);
};
