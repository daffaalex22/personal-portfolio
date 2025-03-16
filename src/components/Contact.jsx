import { motion } from 'framer-motion';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';

import SectionWrapper from './../hoc/SectionWrapper';
import { useState, useRef } from 'react';
 
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaYoutube, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  // const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setLoading(true);

    emailjs
      .send(
        "service_jkbbgp5",
        "template_a3k717r",
        {
          from_name: form.name,
          to_name: "Alex",
          from_email: form.email,
          to_email: "younglexkw01@gmail.com",
          message: form.message
        },
        "ykAjf8_NKX8ua24Ne"
      )
      .then(
        () => {
          // setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: ""
          });
        },
        (error) => {
          // setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Send
          </button>

          {/* Social Media Links */}
          {import.meta.env.VITE_SHOW_CONTACT && (
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => window.open('https://www.linkedin.com/in/daffa-alexander', '_blank')}
                className="text-secondary hover:text-white cursor-pointer border border-secondary hover:border-white rounded-full p-2 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('mailto:daffaalexander.work@gmail.com', '_blank')}
                className="text-secondary hover:text-white cursor-pointer border border-secondary hover:border-white rounded-full p-2 transition-colors"
              >
                <FaEnvelope className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://youtube.com/@atomik-code', '_blank')}
                className="text-secondary hover:text-white cursor-pointer border border-secondary hover:border-white rounded-full p-2 transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://instagram.com/daalx.x', '_blank')}
                className="text-secondary hover:text-white cursor-pointer border border-secondary hover:border-white rounded-full p-2 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://wa.me/6289602903213', '_blank')}
                className="text-secondary hover:text-white cursor-pointer border border-secondary hover:border-white rounded-full p-2 transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </button>
            </div>
          )}
        </form>
      </motion.div>

      <motion.div	
        variants={slideIn("right", "tween", 0.2, 1)}	
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'	
      >
        {/* <EarthCanvas /> */}
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");