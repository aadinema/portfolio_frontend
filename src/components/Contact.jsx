import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://portfolio-backend-two-delta.vercel.app/contact", formData);
      console.log("Form submitted successfully:", response.data);
      setFormData({ name: "", email: "", message: "" });
      setModalMessage("Your message has been sent successfully. Thank you for reaching out!😊");
      setIsError(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setModalMessage("Failed to send your message. Please try again later.");
      setIsError(true);
    } finally {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="bg-[#C4C4C1] text-gray-900 py-20 dark:bg-[#111111] dark:text-gray-100 flex justify-center items-center">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center mb-8 text-orange-800 dark:text-orange-400">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form
            ref={formRef}
            className="max-w-lg  md:mx-auto sm:mx-auto lg:mx-20 bg-[#111111] p-8 rounded-xl shadow-md uppercase"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label className="block text-orange-800  font-bold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-2 bg-[#191919]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-orange-800  font-bold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border  bg-[#191919]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-orange-800 font-bold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded bg-[#191919]"
                rows="4"
                placeholder="TYPE YOUR MESSAGE..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gray-300 text-[#191919] px-6 py-3 rounded hover:bg-gray-400 text-xl font-thin uppercase"
            >
              submit
            </button>
          </form>

          <div className="flex flex-col items-center">
            <iframe
              className="w-full h-72 rounded-xl mb-8"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7310.295460142262!2d79.06290689999999!3d23.6348799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721336693780!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/aditya-nema-808684226"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-gray-800 dark:text-gray-500 hover:text-blue-600 transition duration-300" />
              </a>
              <a
                href="https://github.com/aadinema"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-800 dark:text-gray-500 hover:text-gray-900 transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com/iadityanema"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-gray-800 dark:text-gray-500 hover:text-pink-700 transition duration-300" />
              </a>
              <a
                href="https://wa.me/7470703097"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-2xl text-gray-800 dark:text-gray-500 hover:text-green-600 transition duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-gray-200 p-8 rounded-2xl shadow-lg max-w-sm mx-auto text-center">
            <h3 className={`text-lg font-bold mb-4 ${isError ? "text-red-600" : "text-green-800"}`}>
              {isError ? "Error" : "message sent"}
            </h3>
            <p className="mb-4 text-gray-900 font-semibold">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="bg-teal-800 text-white p-2 rounded hover:bg-teal-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
