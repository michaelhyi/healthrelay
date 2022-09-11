import Company from "../components/Company";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Features />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
