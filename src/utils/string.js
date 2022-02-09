// eslint-disable-next-line import/prefer-default-export
export const transformSlug = (text) => encodeURI(text.toLowerCase().slice(0, 20).replace(/\s/g, '-'));
