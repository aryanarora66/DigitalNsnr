'use client';

import Head from 'next/head';
import InfluencerHero from '@/components/influencer-marketing/InfluencerHero';
import InfluencerBenefits from '@/components/influencer-marketing/InfluencerBenefits';
import InfluencerServices from '@/components/influencer-marketing/InfluencerServices';
import InfluencerProcess from '@/components/influencer-marketing/InfluencerProcess';
import InfluencerSuccess from '@/components/influencer-marketing/InfluencerSuccess';
import InfluencerFAQ from '@/components/influencer-marketing/InfluencerFAQ';
import InfluencerCTA from '@/components/influencer-marketing/InfluencerCTA';

export default function InfluencerMarketingPage() {
  return (
    <>
      <Head>
        <title>Influencer Marketing Agency in Delhi NCR | NSNR FUTUR</title>
        <meta
          name="description"
          content="NSNR FUTUR is a top influencer marketing agency in Delhi NCR, helping brands collaborate with top influencers to boost engagement and drive sales."
        />
        <meta
          name="keywords"
          content="Influencer Marketing Delhi, Influencer Marketing Agency NCR, Instagram Influencers Delhi, NSNR FUTUR Influencer Services, Brand Collaboration"
        />
        <meta name="author" content="NSNR FUTUR" />
        <meta property="og:title" content="Top Influencer Marketing Agency in Delhi NCR | NSNR FUTUR" />
        <meta
          property="og:description"
          content="Reach your target audience with authentic influencer collaborations managed by NSNR FUTUR – the leading influencer marketing agency in Delhi NCR."
        />
        <meta property="og:image" content="https://nsnrfutur.com/og-influencer-marketing.jpg" />
        <meta property="og:url" content="https://nsnrfutur.com/influencer-marketing" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Influencer Marketing Services | NSNR FUTUR Delhi NCR" />
        <meta name="twitter:description" content="Drive real results through influencer-led campaigns – powered by NSNR FUTUR, Delhi NCR." />
        <meta name="twitter:image" content="https://nsnrfutur.com/og-influencer-marketing.jpg" />
      </Head>

      <main>
        <InfluencerHero />
        <InfluencerBenefits />
        <InfluencerServices />
        <InfluencerProcess />
        <InfluencerSuccess />
        <InfluencerFAQ />
        <InfluencerCTA />
      </main>
    </>
  );
}
