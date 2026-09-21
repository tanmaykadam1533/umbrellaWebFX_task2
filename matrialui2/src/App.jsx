import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureSection from "./components/FeatureSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeatureSection
        title="Get our latest furniture pieces"
        description="Premium furniture crafted with quality materials."
        image="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800"
      />

      <FeatureSection
        reverse
        title="Perfect decor for your home"
        description="Elegant and modern furniture collection."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWjMWPj6BTO-N_qeat5UbIJp86M3BhjbTfKyBMvbGsg&s=10"
      />

      <CTA />

      <Footer />
    </>
  );
}

export default App;