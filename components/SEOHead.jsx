import Head from "next/head";

export default function SEOHead() {
  return (
    <Head>
      <title>Matthew Hefferon | Developer Advocate & Data Visualization Professional</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Matthew Hefferon is a Developer Advocate at Metabase specializing in data visualization, analytics, and embedded BI solutions. Certified in Tableau, Google BI, and Meta Front-End Development."
      />
      <meta
        name="keywords"
        content="Matthew Hefferon, Developer Advocate, Data Visualization, Tableau, Metabase, Analytics, Business Intelligence, Embedded Analytics, Data Analytics"
      />
      <meta name="author" content="Matthew Hefferon" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://matthefferon.com" />
      <meta
        property="og:title"
        content="Matthew Hefferon | Developer Advocate & Data Visualization Professional"
      />
      <meta
        property="og:description"
        content="Matthew Hefferon is a Developer Advocate at Metabase specializing in data visualization, analytics, and embedded BI solutions."
      />
      <meta property="og:image" content="https://matthefferon.com/heff.png" />
      <meta property="og:site_name" content="Matthew Hefferon" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://matthefferon.com" />
      <meta
        name="twitter:title"
        content="Matthew Hefferon | Developer Advocate & Data Visualization"
      />
      <meta
        name="twitter:description"
        content="Developer Advocate at Metabase"
      />
      <meta name="twitter:image" content="https://matthefferon.com/heff.png" />

      <link rel="canonical" href="https://matthefferon.com" />
      <link rel="icon" href="/favicon.ico" />
      
      {/* PWA primary color */}
      <meta name="theme-color" content="#14B8A6" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Matthew Hefferon",
            jobTitle: "Developer Advocate",
            url: "https://matthefferon.com",
            image: "https://matthefferon.com/heff.png",
            description: "Developer Advocate at Metabase",
            sameAs: [
              "https://www.linkedin.com/in/matthewhefferon/",
              "https://github.com/matthewhefferon",
              "https://youtube.com/@matthewhefferon",
              "https://public.tableau.com/app/profile/matthewhefferon"
            ],
            alumniOf: {
              "@type": "Organization",
              name: "EVERFI"
            },
            knowsAbout: [
              "Data Visualization",
              "Business Intelligence",
              "Analytics",
              "Tableau",
              "Metabase",
              "React",
              "dbt"
            ],
            worksFor: {
              "@type": "Organization",
              name: "Metabase",
              url: "https://www.metabase.com"
            }
          }),
        }}
      />
    </Head>
  );
} 