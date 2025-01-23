import AboutUs from "@/components/About/AboutUs";
import Banner from "@/components/Banner";
import Foods from "@/components/Food/Foods";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Foods />
      <AboutUs />
      <Footer />
    </div>
  );
}
