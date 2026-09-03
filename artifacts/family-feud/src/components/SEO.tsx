import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  schema?: object;
  /** Keep utility screens (auth, 404, game rooms) out of search results. */
  noindex?: boolean;
  /** Open Graph object type. Blog posts use "article". */
  type?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  schema,
  noindex = false,
  type = 'website',
}) => {
  const defaultTitle = "Friendly Feud - Play Family Feud Online With Friends Free";
  const defaultDescription = "Play Family Feud online with friends for free — no account or download needed. Create a room, share the link, split into teams, and guess the top survey answers. 8,700+ questions & AI rounds.";

  const siteTitle = title ? `${title} | Friendly Feud` : defaultTitle;
  const siteDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content={type} />
      {canonical && <meta property="og:url" content={canonical} />}

      {/* Twitter */}
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
