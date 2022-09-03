import Company from "../components/Company";
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
      <Footer />
    </div>
  );
};

export default Home;
