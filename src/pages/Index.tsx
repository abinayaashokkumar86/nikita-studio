import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickNav from "@/components/QuickNav";
import FeaturedVideo from "@/components/FeaturedVideo";
import AboutSection from "@/components/AboutSection";
import JourneyTimeline from "@/components/JourneyTimeline";
import PerformancesSection from "@/components/PerformancesSection";
import AlbumsSection from "@/components/AlbumsSection";
import BookingSection from "@/components/BookingSection";
import GallerySection from "@/components/GallerySection";
import FooterSection from "@/components/FooterSection";
import CertificatesSection from "@/components/CertificatesSection";
import { usePublicSiteData } from "@/hooks/usePublicSiteData";

const Index = () => {
  const { content, media } = usePublicSiteData();

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection content={content} media={media} />
      <QuickNav />
      <AboutSection />
      <FeaturedVideo content={content} media={media} />
      <JourneyTimeline />
      <PerformancesSection media={media} />
      <AlbumsSection content={content} media={media} />
      <CertificatesSection content={content} media={media} />
      <BookingSection />
      <GallerySection content={content} media={media} />
      <FooterSection />
    </div>
  );
};

export default Index;
