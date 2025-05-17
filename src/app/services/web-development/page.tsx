'use client';

import Head from 'next/head';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcess from '@/components/web-development/WebDevProcess';
import WebDevTechStack from '@/components/web-development/WebDevTechStack';
import WebDevSuccess from '@/components/web-development/WebDevSuccess';
import WebDevFAQ from '@/components/web-development/WebDevFAQ';
import WebDevCTA from '@/components/web-development/WebDevCTA';

export default function WebDevelopmentPage() {
  return (
    <>
      <Head>
        <title>Web Development Company in Delhi NCR | NSNR FUTUR</title>
        <meta
          name="description"
          content="NSNR FUTUR offers cutting-edge website development services in Delhi NCR. Get fast, secure & SEO-friendly websites built with modern technologies."
        />
        <meta
          name="keywords"
          content="Web development Delhi NCR, Website development company, Custom web development, NSNR FUTUR, Full-stack development, SEO-friendly websites"
        />
        <meta name="author" content="NSNR FUTUR" />
        <meta property="og:title" content="Web Development Services in Delhi NCR | NSNR FUTUR" />
        <meta
          property="og:description"
          content="Build fast and responsive websites with NSNR FUTUR – trusted web development agency in Delhi NCR."
        />
        <meta property="og:image" content="https://nsnrfutur.com/og-webdev.jpg" />
        <meta property="og:url" content="https://nsnrfutur.com/web-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Web Development Company in Delhi NCR" />
        <meta
          name="twitter:description"
          content="Custom web development services by NSNR FUTUR – tailored for startups, SMEs & enterprises."
        />
        <meta name="twitter:image" content="https://nsnrfutur.com/og-webdev.jpg" />
      </Head>

      <main>
        <WebDevHero />
        <WebDevBenefits />
        <WebDevServices />
        <WebDevProcess />
        <WebDevTechStack />
        <WebDevSuccess />
        <WebDevFAQ />
        <WebDevCTA />
      </main>
    </>
  );
}
