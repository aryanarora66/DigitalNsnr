'use client';

import Head from 'next/head';
import FacebookAdsHero from '@/components/facebook-ads/FacebookAdsHero';
import FacebookAdsBenefits from '@/components/facebook-ads/FacebookAdsBenefits';
import FacebookAdsTypes from '@/components/facebook-ads/FacebookAdsTypes';
import FacebookAdsProcess from '@/components/facebook-ads/FacebookAdsProcess';
import FacebookAdsSuccess from '@/components/facebook-ads/FacebookAdsSuccess';
import FacebookAdsFAQ from '@/components/facebook-ads/FacebookAdsFAQ';
import FacebookAdsCTA from '@/components/facebook-ads/FacebookAdsCTA';

export default function FacebookAdsPage() {
  return (
    <>
      <Head>
        <title>Facebook Ads Agency in Delhi NCR | NSNR FUTUR</title>
        <meta
          name="description"
          content="Boost your sales with Facebook Ads by NSNR FUTUR, Delhi NCR's top advertising agency. Our Facebook ad campaigns deliver leads, traffic, and brand growth."
        />
        <meta
          name="keywords"
          content="Facebook Ads Delhi, Facebook Advertising Agency, Facebook Marketing Delhi NCR, NSNR FUTUR Facebook Ads, Lead Generation Facebook"
        />
        <meta name="author" content="NSNR FUTUR" />
        <meta property="og:title" content="NSNR FUTUR - Facebook Ads Experts in Delhi NCR" />
        <meta
          property="og:description"
          content="Expert Facebook Ads agency in Delhi NCR helping businesses run high-converting ad campaigns. Book a strategy call with NSNR FUTUR today."
        />
        <meta property="og:image" content="https://nsnrfutur.com/og-facebook-ads.jpg" />
        <meta property="og:url" content="https://nsnrfutur.com/facebook-ads" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Facebook Ads Services | NSNR FUTUR Delhi NCR" />
        <meta name="twitter:description" content="Facebook Ads that drive ROI — by NSNR FUTUR, your Delhi NCR-based ad partner." />
        <meta name="twitter:image" content="https://nsnrfutur.com/og-facebook-ads.jpg" />
      </Head>

      <main>
        <FacebookAdsHero />
        <FacebookAdsBenefits />
        <FacebookAdsTypes />
        <FacebookAdsProcess />
        <FacebookAdsSuccess />
        <FacebookAdsFAQ />
        <FacebookAdsCTA />
      </main>
    </>
  );
}
