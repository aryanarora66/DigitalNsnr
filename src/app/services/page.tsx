import ServicesHero from '@/components/services/ServicesHero';
import ROISection from '@/components/services/ROISection';
import WebsiteImportance from '@/components/services/WebsiteImportance';
import MetaAds from '@/components/services/MetaAds';
import GoogleAds from '@/components/services/GoogleAds';
import SEO from '@/components/services/SEO';
import LocalSEO from '@/components/services/LocalSEO';
import SocialMediaMarketing from '@/components/services/SocialMediaMarketing';
import InfluencerMarketing from '@/components/services/InfluencerMarketing';
import AllServices from '@/components/services/AllServices';
import CTA from '@/components/services/CTA';

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ROISection />
      <WebsiteImportance />
      <MetaAds />
      <GoogleAds />
      <SEO />
      <LocalSEO />
      <SocialMediaMarketing />
      <InfluencerMarketing />
      <AllServices />
      <CTA />
    </main>
  );
}