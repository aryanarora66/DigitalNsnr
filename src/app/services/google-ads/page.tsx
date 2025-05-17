'use client';

import Head from 'next/head';
import GoogleAdsHero from '@/components/google-ads/GoogleAdsHero';
import GoogleAdsBenefits from '@/components/google-ads/GoogleAdsBenefits';
import CampaignTypes from '@/components/google-ads/CampaignTypes';
import GoogleAdsProcess from '@/components/google-ads/GoogleAdsProcess';
import SuccessStories from '@/components/google-ads/SuccessStories';
import GoogleAdsFAQ from '@/components/google-ads/GoogleAdsFAQ';
import GoogleAdsCTA from '@/components/google-ads/GoogleAdsCTA';

export default function GoogleAdsPage() {
  return (
    <>
      <Head>
        <title>Google Ads Agency in Delhi NCR | NSNR FUTUR</title>
        <meta
          name="description"
          content="Maximize your ROI with NSNR FUTUR, Delhi NCR's trusted Google Ads agency. We run high-performance search, display, video, and shopping campaigns."
        />
        <meta
          name="keywords"
          content="Google Ads Delhi, PPC Agency Delhi NCR, Google Advertising Services, Google AdWords Experts, NSNR FUTUR Google Ads"
        />
        <meta name="author" content="NSNR FUTUR" />
        <meta property="og:title" content="NSNR FUTUR - Google Ads Experts in Delhi NCR" />
        <meta
          property="og:description"
          content="Looking to boost leads and sales through Google Ads? NSNR FUTUR is your performance marketing partner in Delhi NCR."
        />
        <meta property="og:image" content="https://nsnrfutur.com/og-google-ads.jpg" />
        <meta property="og:url" content="https://nsnrfutur.com/google-ads" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google Ads Services | NSNR FUTUR Delhi NCR" />
        <meta name="twitter:description" content="Achieve better ROI with high-converting Google Ad campaigns managed by NSNR FUTUR." />
        <meta name="twitter:image" content="https://nsnrfutur.com/og-google-ads.jpg" />
      </Head>

      <main>
        <GoogleAdsHero />
        <GoogleAdsBenefits />
        <CampaignTypes />
        <GoogleAdsProcess />
        <SuccessStories />
        <GoogleAdsFAQ />
        <GoogleAdsCTA />
      </main>
    </>
  );
}
