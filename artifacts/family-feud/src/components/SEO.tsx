import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  canonical, 
  schema 
}) => {
  const defaultTitle = "Friendly Feud – Free Multiplayer & Solo Family Feud-Style Game";
  const defaultDescription = "Free, no account needed. Challenge friends in multiplayer or play solo — split into teams & guess the top answers. 8,700+ questions & AI rounds included.";
  
  const siteTitle = title ? `${title} | Friendly Feud` : defaultTitle;
  const siteDescription = description || defaultDescription;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      
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
