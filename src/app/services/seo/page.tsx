'use client';

import Head from 'next/head';
import SEOHero from '@/components/seo/SEOHero';
import SEOBenefits from '@/components/seo/SEOBenefits';
import SEOServices from '@/components/seo/SEOServices';
import SEOProcess from '@/components/seo/SEOProcess';
import SEOSuccessStories from '@/components/seo/SEOSuccessStories';
import SEOFAQ from '@/components/seo/SEOFAQ';
import SEOCTA from '@/components/seo/SEOCTA';

export default function SEOPage() {
  return (
    <>
      <Head>
        <title>SEO Services in Delhi NCR | NSNR FUTUR - Top SEO Agency</title>
        <meta
          name="description"
          content="Boost your website traffic and rankings with NSNR FUTUR – a leading SEO agency in Delhi NCR offering on-page, off-page & technical SEO services."
        />
        <meta
          name="keywords"
          content="SEO Agency Delhi NCR, SEO Services Delhi, Best SEO Company, On-page SEO, Off-page SEO, Technical SEO, NSNR FUTUR"
        />
        <meta name="author" content="NSNR FUTUR" />
        <meta property="og:title" content="Top SEO Agency in Delhi NCR | NSNR FUTUR" />
        <meta
          property="og:description"
          content="Rank higher on Google and grow your business with expert SEO services by NSNR FUTUR – serving clients in Delhi NCR and beyond."
        />
        <meta property="og:image" content="https://nsnrfutur.com/og-seo.jpg" />
        <meta property="og:url" content="https://nsnrfutur.com/seo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best SEO Services in Delhi NCR | NSNR FUTUR" />
        <meta name="twitter:description" content="Dominate search results with strategic SEO from NSNR FUTUR – your Delhi NCR SEO partner." />
        <meta name="twitter:image" content="https://nsnrfutur.com/og-seo.jpg" />
      </Head>

      <main>
        <SEOHero />
        <SEOBenefits />
        <SEOServices />
        <SEOProcess />
        <SEOSuccessStories />
        <SEOFAQ />
        <SEOCTA />
      </main>
    </>
  );
}
