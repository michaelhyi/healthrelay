//@ts-ignore
import { Fade } from "react-reveal";

const Features = () => {
  return (
    <div
      id="features"
      className="flex flex-col w-full justify-center items-center font-normal bg-400 py-48"
    >
      <Fade up distance="20px" delay={200}>
        <div className="font-poppins font-bold md:text-5xl xl:text-6xl text-white">
          Features
        </div>
        <div className="font-poppins font-medium md:text-sm lg:text-base text-center w-[50vh] text-white mt-6">
          Our software provides a variety of features that maximize accessbility
          and data security for hospitals, radiologists, and ordering
          physicians.
        </div>
      </Fade>
      <Fade up distance="20px" delay={300}>
        <div className="mt-24 flex lg:flex-row md:flex-col md:justify-center items-center">
          <div>
            <div className="font-poppins font-semibold md:text-center lg:text-left md:text-2xl xl:text-4xl 2xl:text-4xl text-white w-[65vh]">
              01 - HIPAA-Compliant Automated Order Transmission
            </div>
            <div className="font-poppins md:text-center lg:text-left md:text-sm text-white w-[50vh] mt-4">
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
            className="lg:w-[350px] xl:w-[450px]"
          />
        </div>
      </Fade>
      <Fade up distance="20px" delay={300}>
        <div className="mt-48 flex items-center">
          <img
            src="/undraw_people_search_re_5rre 1.png"
            className="lg:w-[250px] xl:w-[300px]"
          />
          <div>
            <div className="font-poppins font-semibold lg:text-2xl xl:text-4xl 2xl:text-4xl text-white w-[65vh] text-right">
              02 - Physician Contacts
            </div>
            <div className="font-poppins lg:text-sm text-white w-[50vh] mt-4 text-right ml-auto">
              We make communication easy. Currently, radiologists and ordering
              physicians have to manually search for contacts and relay order
              information through phone calls. With HealthRelay, we streamline
              the communication between doctors through our order transmission
              system. This saves crucial time on the hundreds of cases that
              radiologists go through every day. Furthermore, radiologists are
              able to relay critical medical information to physicians with read
              receipts and at a much greater scale, which prevents delayed care,
              medical omission, and medical lawsuits.
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Features;
