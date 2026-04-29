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

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <QuickNav />
    <AboutSection />
    <FeaturedVideo />
    <JourneyTimeline />
    <PerformancesSection />
    <AlbumsSection />
    <BookingSection />
    <GallerySection />
    <FooterSection />
  </div>
);

export default Index;
