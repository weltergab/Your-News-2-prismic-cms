import Prismic from '@prismicio/client';
import { DefaultClient } from '@prismicio/client/types/client';

export function getPrismicClient(req = null): DefaultClient {
  const accessToken = process.env.PRISMIC_ACCESS_TOKEN;
  const apiEndpoint = process.env.PRISMIC_API_ENDPOINT;

  const prismic = Prismic.client(<string>apiEndpoint, {
    req,
    accessToken,
  });

  return prismic;
}
