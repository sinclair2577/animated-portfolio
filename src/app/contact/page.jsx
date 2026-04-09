"use client";
import { motion } from "motion/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-[calc(100vh-6rem)]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-[calc(100vh-6rem)] lg:w-1/2 flex flex-col items-center justify-center gap-6">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
            <span className="text-sm tracking-[0.3em] uppercase text-gray-500 dark:text-gray-400">
              Get in Touch
            </span>
            <div className="h-px w-12 bg-gray-400 dark:bg-gray-600" />
          </motion.div>

          {/* Animated Title */}
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <div>
              {text.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col gap-3 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span>sinclair335648@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span>github.com/sinclair2577</span>
            </div>
          </motion.div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-2/3 lg:h-full lg:w-1/2 glass rounded-2xl text-base sm:text-lg md:text-xl flex flex-col gap-6 sm:gap-8 justify-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 dark:text-white"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="font-medium"
          >
            Dear Sinclair,
          </motion.span>
          <motion.textarea
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            rows={6}
            className="bg-transparent border-b-2 border-b-gray-300 dark:border-b-gray-600 outline-none resize-none min-h-[80px] focus:border-b-purple-500 transition-colors duration-300"
            name="user_message"
            placeholder="Type your message here..."
          />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="font-medium"
          >
            My mail address is:
          </motion.span>
          <motion.input
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            name="user_email"
            type="email"
            placeholder="your.email@example.com"
            className="bg-transparent border-b-2 py-2 border-b-gray-300 dark:border-b-gray-600 outline-none focus:border-b-purple-500 transition-colors duration-300"
          />
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="font-medium"
          >
            Regards
          </motion.span>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold p-4 transition-all duration-300 hover:shadow-xl"
          >
            Send Message
          </motion.button>
          {success && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-500 font-semibold text-center"
            >
              Your message has been sent successfully!
            </motion.span>
          )}
          {error && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 font-semibold text-center"
            >
              Something went wrong!
            </motion.span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
