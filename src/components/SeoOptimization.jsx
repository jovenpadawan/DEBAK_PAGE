import { Helmet } from 'react-helmet-async';

export default function SeoOptimization({ title, description }) {
  const siteTitle = 'DebakTKD';
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description || 'Club DEBAK TKD, taekwondo y alto rendimiento en Ecuador.'} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description || 'Club DEBAK TKD, taekwondo y alto rendimiento en Ecuador.'} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description || 'Club DEBAK TKD, taekwondo y alto rendimiento en Ecuador.'} />
    </Helmet>
  );
}
