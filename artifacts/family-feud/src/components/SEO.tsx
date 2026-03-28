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
  const defaultTitle = "Friendly Feud – Free Online Multiplayer Quiz Game";
  const defaultDescription = "Play Friendly Feud, a free online multiplayer survey game inspired by classic TV game shows. Create a room, split into two teams, and compete to uncover the top survey answers. No download required.";
  
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
