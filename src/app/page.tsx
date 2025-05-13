import Campaign from "@/components/campaign";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Register from "@/components/register";
import Statistic from "@/components/statistic";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="px-6 md:px-10 lg:px-12 xl:px-16">
        <Hero />
        <Campaign />
        <Register />
        <Statistic />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
