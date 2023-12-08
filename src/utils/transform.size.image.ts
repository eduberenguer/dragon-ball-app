export const transformSizeImage = (url: string) => {
  const part = url.split('upload/');

  if (part.length === 2) {
    return `${part[0]}upload/h_320,w_200/${part[1]}`;
  } else {
    return url;
  }
};
