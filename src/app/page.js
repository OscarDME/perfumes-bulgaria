// app/page.js
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import RecipeList from "@/components/RecipeList";
import WhatYouGet from "@/components/WhatYouGet";
import Testimonials from "@/components/Testimonials";
import AutonomyIntro from "@/components/AutonomyIntro";
import BenefitsList from "@/components/BenefitsList";
import Economy from "@/components/Economy";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans">
      <Hero />
      <Story />
      <RecipeList />
      <WhatYouGet />
      <Testimonials />
      <AutonomyIntro />
      <BenefitsList />
      <Economy />
      <FinalCta />
      <Footer />
    </main>
  );
}
