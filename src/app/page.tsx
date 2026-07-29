import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Partnerships from "@/components/Partnerships";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CATFramework from "@/components/CATFramework";
import HowWeDeliverResults from "@/components/HowWeDeliverResults";
import FAQSection from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { EnquireProvider } from "@/context/EnquireContext";
import EnquireModal from "@/components/EnquireModal";

export default function Home() {
  return (
    <EnquireProvider>
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Partnerships />
        <AccredianEdge />
        <DomainExpertise />
        <CourseSegmentation />
        <WhoShouldJoin />
        <CATFramework />
        <HowWeDeliverResults />
        <FAQSection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <EnquireModal />
    </EnquireProvider>
  );
}
