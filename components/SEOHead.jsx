import Head from "next/head";

export default function SEOHead() {
  return (
    <Head>
      <title>Matthew Hefferon | Developer Advocate & Data Visualization Professional</title>
      <meta
        name="description"
        content="Matthew Hefferon is a Developer Advocate at Metabase specializing in data visualization, analytics, and embedded BI solutions. Certified in Tableau, Google BI, and Meta Front-End Development."
      />
      <meta
        name="keywords"
        content="Matthew Hefferon, Developer Advocate, Data Visualization, Tableau, Metabase, Analytics, Business Intelligence"
      />
      <meta name="author" content="Matthew Hefferon" />
      <meta
        property="og:title"
        content="Matthew Hefferon | Developer Advocate & Data Visualization Professional"
      />
      <meta
        property="og:description"
        content="Matthew Hefferon is a Developer Advocate at Metabase specializing in data visualization, analytics, and embedded BI solutions."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://matthefferon.com" />
      <meta property="og:image" content="https://matthefferon.com/heff.png" />
      <link rel="canonical" href="https://matthefferon.com" />
      <link rel="icon" href="/favicon.ico" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Person",
            name: "Matthew Hefferon",
            jobTitle: "Developer Advocate",
            url: "https://matthefferon.com",
            sameAs: [
              "https://www.linkedin.com/in/matthewhefferon/",
              "https://github.com/matthewhefferon",
              "https://youtube.com/@matthewhefferon",
            ],
          }),
        }}
      />
    </Head>
  );
} 