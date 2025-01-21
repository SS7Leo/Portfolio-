import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1af72n", 
        "template_low65fa", 
        form.current, 
        "GqUbvMZ-zV4ps29Pa"
      )
      .then(
        () => {
          setIsSubmitted(true);
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="border-b border-neural-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-10 mx-auto max-w-xl p-5 border rounded-lg shadow-lg"
      >
        {isSubmitted && (
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-green-600 text-center"
          >
            Your message has been successfully sent!
          </motion.p>
        )}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <label className="block text-left mb-2">Name</label>
          <input
            type="text"
            name="Name"
            className="w-full p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-600 text-gray-800"
            required
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="mb-4"
        >
          <label className="block text-left mb-2">E-mail</label>
          <input
            type="email"
            name="E-mail"
            className="w-full p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-600 text-gray-800"
            required
          />
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.9 }}
          className="mb-4"
        >
          <label className="block text-left mb-2">Message</label>
          <textarea
            name="message"
            className="w-full p-2 border rounded focus:border-blue-600 focus:ring-2 focus:ring-blue-600 text-gray-800"
            rows="4"
            required
          ></textarea>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1.1 }}
          className="text-center"
        >
          <input
            type="submit"
            value="Send"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer"
          />
        </motion.div>
      </form>
    </div>
  );
};

export default Contact;
