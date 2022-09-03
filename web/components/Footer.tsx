import Section from "./Section";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <Section footer id="contact">
      <div className="p-10">
        <div className="flex space-x-12">
          <div className="flex flex-col justify-center items-center mr-36">
            <div className="h-[60px] w-[60px] bg-[#E5E5E5] rounded-xl" />
            <div className="font-poppins font-bold text-white text-3xl mt-6">
              HealthRelay
            </div>
          </div>
          <div>
            <div className="text-white font-poppins font-semibold text-2xl">
              Quick Links
            </div>
            <div className="text-white font-poppins mt-4">Features</div>
            <div className="text-white font-poppins  mt-2">Company</div>
            <div className="text-white font-poppins  mt-2">Contact</div>
            <div className="text-white font-poppins  mt-2">Get Started</div>
          </div>
          <div>
            <div className="text-white font-poppins font-semibold text-2xl">
              Contact
            </div>
            <div>
              <a
                className="flex items-center space-x-2 duration-500 hover:text-200 mt-4"
                target="_blank"
                rel="noreferrer"
                href="mailto: info@health-relay.com"
              >
                <AiFillMail color="white" />
                <div className="text-white font-poppins">
                  info@health-relay.com
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="font-poppins text-white font-medium text-center mt-24">
          © 2022 HealthRelay. All rights reserved.
        </div>
      </div>
    </Section>
  );
};

export default Footer;
