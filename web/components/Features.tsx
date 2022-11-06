//@ts-ignore
import { Fade } from "react-reveal";

const Features = () => {
  return (
    <div
      id="features"
      className="flex flex-col w-full justify-center items-center font-normal bg-400 sm:py-36 md:py-48"
    >
      <Fade up distance="20px" delay={200}>
        <div className="font-poppins font-bold sm:text-4xl md:text-5xl xl:text-6xl text-white">
          Features
        </div>
        <div className="font-poppins font-medium sm:text-sm lg:text-base text-center sm:w-[400px] md:w-[512px] text-white mt-6">
          Our software provides a variety of features that maximize accessbility
          and data security for hospitals, radiologists, and ordering
          physicians.
        </div>
      </Fade>
      <Fade up distance="20px" delay={300}>
        <div className="mt-24 flex lg:flex-row sm:flex-col items-center lg:space-x-12">
          <div className="flex flex-col items-center ">
            <div className="font-poppins font-semibold sm:text-center lg:text-left md:text-2xl xl:text-4xl 2xl:text-4xl text-white sm:w-[400px] md:w-[512px]">
              01 - HIPAA-Compliant Automated Order Transmission
            </div>
            <div className="font-poppins sm:text-sm sm:text-center lg:text-left md:text-sm text-white sm:w-[400px] md:w-[512px] mt-4">
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
            className="sm:w-[400px] sm:mt-16 lg:w-[375px] xl:w-[450px]"
          />
        </div>
      </Fade>
      <Fade up distance="20px" delay={300}>
        <div className="sm:mt-24 lg:mt-36 flex items-center lg:flex-row sm:flex-col lg:space-x-24">
          <img
            src="/undraw_people_search_re_5rre 1.png"
            className="sm:w-[262.5px] lg:w-[250px] xl:w-[300px]"
          />
          <div className="flex flex-col items-center sm:mt-12">
            <div className="font-poppins font-semibold sm:text-center lg:text-right md:text-2xl xl:text-4xl 2xl:text-4xl text-white sm:w-[400px] md:w-[512px]">
              02 - Physician Contacts
            </div>
            <div className="font-poppins sm:text-sm sm:text-center lg:text-sm text-white sm:w-[400px] md:w-[512px] mt-4 lg:text-right lg:ml-auto">
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
