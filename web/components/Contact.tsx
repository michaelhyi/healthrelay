import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
//@ts-ignore
import { Fade } from "react-reveal";
import Input from "./Input";

const Contact = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM!);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div
      id="contact"
      className="flex flex-col w-full justify-center items-center font-normal bg-400 py-36"
    >
      <Fade up distance="20px" delay={200}>
        <div className="font-poppins font-bold sm:text-4xl md:text-5xl xl:text-6xl text-white">
          Contact
        </div>
        <div className="font-poppins font-medium sm:text-sm xl:text-base text-center sm:w-[400px] md:w-[512px] text-white mt-6">
          Want early access to the software or request a demo? Or do you just
          want further information about our product? Regardless of your reason
          of contact, send us an email using our contact form below.
        </div>
      </Fade>
      <Fade up distance="20px" delay={300}>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            await handleSubmit(e);

            setFirstName("");
            setLastName("");
            setEmail("");
            setCompany("");
            setSubject("");
            setMessage("");
          }}
          className="mt-12 flex-col space-y-6 sm:w-[400px] md:w-[512px]"
        >
          <div className="flex space-x-8">
            <div className="w-[512px]">
              <Input
                type="text"
                name="firstname"
                label="First Name"
                value={firstName}
                setValue={setFirstName}
              />
              <div className="font-poppins font-semibold text-red-300 text-sm">
                <ValidationError
                  prefix="First Name"
                  field="firstname"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="w-[512px]">
              <Input
                type="text"
                name="lastname"
                label="Last Name"
                value={lastName}
                setValue={setLastName}
              />
              <div className="font-poppins font-semibold text-red-300 text-sm">
                <ValidationError
                  prefix="Last Name"
                  field="lastname"
                  errors={state.errors}
                />
              </div>
            </div>
          </div>
          <Input
            type="email"
            name="email"
            label="Business Email"
            value={email}
            setValue={setEmail}
          />
          <div className="font-poppins font-semibold text-red-300 text-sm">
            <ValidationError
              prefix="Business Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="font-poppins font-semibold text-red-300 text-sm"></div>
          <Input
            type="text"
            name="company"
            label="Company Name"
            value={company}
            setValue={setCompany}
          />
          <div className="font-poppins font-semibold text-red-300 text-sm">
            <ValidationError
              prefix="Company Name"
              field="company"
              errors={state.errors}
            />
          </div>
          <Input
            type="text"
            name="subject"
            label="Subject"
            value={subject}
            setValue={setSubject}
          />
          <div className="font-poppins font-semibold text-red-300 text-sm">
            <ValidationError
              prefix="Subject"
              field="subject"
              errors={state.errors}
            />
          </div>
          <Input
            name="message"
            label="Message"
            value={message}
            setValue={setMessage}
          />
          <div className="font-poppins font-semibold text-red-300 text-sm">
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            disabled={state.submitting}
            type="submit"
            className="hover:cursor-pointer bg-400 font-poppins text-white border-[1px] border-white text-center p-4 rounded-xl text-semibold text-xl duration-200 hover:bg-300 mt-12 w-full"
          >
            Submit
          </button>
        </form>
      </Fade>
    </div>
  );
};

export default Contact;
