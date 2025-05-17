'use client';

import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ClientWebsites from '@/components/ClientWebsites';
import AutoSlider from '@/components/AutoSlider';
import Head from 'next/head';
import BestAppDevelopmentSection from "@/components/BestAppDevelopmentSection";
import MarketingServices from "@/components/MarketingServices";
import ContactCTASection from '@/components/ContactCTASection';
import FAQSection from '@/components/FAQSection';

export default function Home() { 
  return (
    <>
      <Head>
        <title>Digital Marketing Agency in Delhi NCR | NSNR FUTURE</title>
        <meta
          name="description"
          content="Grow your business with NSNR FUTURE, the leading digital marketing agency in Delhi NCR. We offer SEO, Social Media, Paid Ads, and Branding services."
        />
        <meta
          name="keywords"
          content="Digital Marketing Delhi NCR, SEO Company, PPC Services, Social Media Marketing, Online Branding, NSNR FUTURE"
        />
        <meta name="author" content="NSNR FUTURE" />
        <meta property="og:title" content="NSNR FUTURE - Digital Marketing Experts in Delhi NCR" />
        <meta
          property="og:description"
          content="Top-rated digital marketing agency helping brands grow online through data-driven marketing solutions in Delhi NCR."
        />
        <meta property="og:image" content="https://nsnrfuture.com/og-image.jpg" />
        <meta property="og:url" content="https://nsnrfuture.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main>
        <HeroSection />
        <Services />
        <AutoSlider />
        <Testimonials />
        <BestAppDevelopmentSection />
        <ClientWebsites />
         <MarketingServices />
          <ContactCTASection />
           <FAQSection />
      </main>
    </>
  );
}
