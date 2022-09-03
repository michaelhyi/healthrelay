import Section from "./Section";
//@ts-ignore
import { Fade } from "react-reveal";

const Features = () => {
  return (
    <Section h={120} blue id="features">
      <Fade up distance="20px" delay={200}>
        <div className="font-poppins font-bold text-5xl text-white">
          Features
        </div>
        <div className="font-poppins font-medium font-lg text-center w-[50vh] text-white mt-6">
          We are a team of motivated and achieving high school students who are
          passionate about the intersection of healthcare and technology.
        </div>
      </Fade>
      <Fade up distance="20px" delay={300}>
        <div className="mt-24 flex items-center space-x-36">
          <div>
            <div className="font-poppins font-semibold text-3xl text-white w-[80vh]">
              01 - HIPAA-Compliant Automated Order Transmission
            </div>
            <div className="font-poppins font-lg text-white w-[50vh] mt-4">
              As a bioinformatics company, data security is of utmost
              importance. Therefore, we employ encryption algorithms to all the
              information stored with each order created by a radiologist. Then,
              this order is automatically sent to the selected ordering
              physician with no delay, purely automatic. Our server decrypts the
              data before the ordering physician reads the order.
            </div>
          </div>
          <img
            src="/undraw_secure_files_re_6vdh 1.png"
            className="w-[40vh] aspect-[866.52/637.06]"
          />
        </div>
      </Fade>
      <Fade up distance="20px" delay={300}>
        <div className="mt-24 flex items-center space-x-36">
          <img
            src="/undraw_people_search_re_5rre 1.png"
            className="w-[30vh] aspect-[590.72/659.32]"
          />
          <div>
            <div className="font-poppins font-semibold text-3xl text-white w-[80vh] text-right">
              02 - Physician Contacts
            </div>
            <div className="font-poppins font-lg text-white w-[50vh] mt-4 text-right ml-auto">
              As a bioinformatics company, data security is of utmost
              importance. Therefore, we employ encryption algorithms to all the
              information stored with each order created by a radiologist. Then,
              this order is automatically sent to the selected ordering
              physician with no delay, purely automatic. Our server decrypts the
              data before the ordering physician reads the order.
            </div>
          </div>
        </div>
      </Fade>
    </Section>
  );
};

export default Features;
