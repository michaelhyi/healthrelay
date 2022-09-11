import { useState } from "react";
//@ts-ignore
import { Fade } from "react-reveal";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [messageError, setMessageError] = useState("");

  return (
    <div
      id="contact"
      className="flex flex-col w-full justify-center items-center font-normal bg-400 py-36"
    >
      <Fade up distance="20px" delay={200}>
        <div className="font-poppins font-bold text-6xl text-white">
          Contact
        </div>
        <div className="font-poppins font-medium font-lg text-center w-[50vh] text-white mt-6">
          Want early access to the software or request a demo? Send an email
          using our contact form below.
        </div>
      </Fade>
      <Fade up distance="20px" delay={300}>
        <div className="mt-12">
          <div className="flex-col space-y-6 w-[512px]">
            <div className="flex space-x-8">
              <div className="flex-col space-y-2 w-[512px]">
                <div className="font-poppins font-semibold text-white text-sm">
                  First Name
                </div>
                <input className="border-[1px] border-white bg-400 p-4 rounded-xl text-white w-full" />
              </div>
              <div className="flex-col space-y-2 w-[512px]">
                <div className="font-poppins font-semibold text-white text-sm">
                  Last Name
                </div>
                <input className="border-[1px] border-white bg-400 p-4 rounded-xl text-white w-full" />
              </div>
            </div>
            <div className="flex-col space-y-2">
              <div className="font-poppins font-semibold text-white text-sm">
                Business Email
              </div>
              <input className="border-[1px] border-white bg-400 p-4 rounded-xl text-white w-full" />
            </div>
            <div className="flex-col space-y-2">
              <div className="font-poppins font-semibold text-white text-sm">
                Company Name
              </div>
              <input className="border-[1px] border-white bg-400 p-4 rounded-xl text-white w-full" />
            </div>
            <div className="flex-col space-y-2">
              <div className="font-poppins font-semibold text-white text-sm">
                Subject
              </div>
              <input className="border-[1px] border-white bg-400 p-4 rounded-xl text-white w-full" />
            </div>
            <div className="flex-col space-y-2">
              <div className="font-poppins font-semibold text-white text-sm">
                Message
              </div>
              <textarea className="border-[1px] border-white bg-400 p-4 rounded-xl text-white h-96 w-full resize-none" />
            </div>
          </div>
          <div className="bg-400 font-poppins text-white border-[1px] border-white text-center p-4 rounded-xl text-semibold text-xl duration-200 hover:bg-300 mt-12">
            Submit
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
