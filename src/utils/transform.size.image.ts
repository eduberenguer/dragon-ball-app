export const transformSizeImage = (url: string) => {
  const part = url.split('/v');

  if (part.length === 2) {
    return `${part[0]}/h_320,w_150/v${part[1]}`;
  } else {
    return url;
  }
};
