import HeroSection from "@/components/home/HeroSection";
import AboutTeamSection from "@/components/home/AboutTeamSection";
import F1InSchoolsSection from "@/components/home/F1InSchoolsSection";
import ProfileSection from "@/components/home/ProfileSection";
import PhotoPlaceholder from "@/components/home/PhotoPlaceholder";
import SponsorsSection from "@/components/home/SponsorsSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <h1 className="sr-only">AeroForce Racing — F1 in Schools Team</h1>
      <HeroSection />
      <AboutTeamSection />
      <F1InSchoolsSection />
      <ProfileSection />
      <PhotoPlaceholder />
      <SponsorsSection />
      <Footer />
    </main>
  );
};

export default Index;
