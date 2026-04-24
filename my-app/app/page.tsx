import Navbar from "@/components/layout/Navbar";
import Transformation from "@/components/sections/Transformation";
import LMSIntro from "@/components/sections/LMSIntro";
import Consultant from "@/components/sections/Consultant";
import MgmtProgram from "@/components/sections/MgmtProgram";
import ManagementDev from "@/components/sections/ManagementDev";
import LearningCEO from "@/components/sections/LearningCEO";
import TrainingConsultant from "@/components/sections/TrainingConsultant";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Transformation />
      <LMSIntro />
      <Consultant />
      <MgmtProgram />
      <ManagementDev />
      <LearningCEO />
      <TrainingConsultant />
      <Testimonials />
      <Footer />
    </main>
  );
}