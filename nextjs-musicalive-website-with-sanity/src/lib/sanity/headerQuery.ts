
// lib/sanity/queries.ts

export const headerQuery = `
{
  "logo": *[_type == "logo"][0]{ image { asset->{url} }, alt },
  "navigation": *[_type == "mainNavigation"][0]{
    items[]->{
      _id,
      title,
      slug
    }
  }
}
`;
