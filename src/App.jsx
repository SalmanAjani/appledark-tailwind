import styles from "./style";
import { Hero, Navbar } from "./components";
import Stats from "./components/Stats";
import About from "./components/About";
import Billing from "./components/Billing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <About />
        <Billing />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
