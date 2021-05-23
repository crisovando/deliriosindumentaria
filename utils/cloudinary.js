import { buildUrl } from 'cloudinary-build-url';

export const getUrl = (uri) => {
  const url = buildUrl(uri, {
    cloud: {
      cloudName: 'menf-tech',
    }
  });
return url;
}
