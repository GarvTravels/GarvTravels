import Banner from "./components/Banner/index";
import Courses from "./components/Services/index";
import Testimonials from "./components/Testimonials/index";
import Newsletter from "./components/Newsletter/Newsletter";
import Aboutus from "./components/AboutUs";
import Fleets from "./components/Fleets/index";
import PopularRoutes from "./components/PopularRoutes";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <main>
      <Banner />
      <Courses />
      <Aboutus />
      <Fleets />
      <Testimonials />
      <PopularRoutes />
      <FAQ />
      <Newsletter />
    </main>
  );
}
