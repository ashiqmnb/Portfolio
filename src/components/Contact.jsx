import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const payload = {
      from_name: formData.fullName,
      email: formData.email,
      message: formData.message,
    };

    try { 
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: payload,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setFormData({ fullName: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-5 sm:px-10 md:px-20 lg:px-32 py-24 text-white"
    >
      <h2 className="text-3xl font-bold text-[#F86D00] mb-10 text-center">
        Contact Me
      </h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Form Part */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-gray-800 p-6 rounded-xl shadow-md"
        >
          <div className="mb-4">
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              disabled={loading}
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              disabled={loading}
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              disabled={loading}
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#F86D00] hover:bg-orange-600 text-white px-6 py-2 rounded transition-all flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
                <span>Sending...</span>
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Info Part */}
        <div className="flex-1 bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-3xl font-serif mb-4 text-[#F86D00] font-bold">
            Get in Touch
          </h3>
          <p className="mb-4 text-md text-gray-300">
            Feel free to reach out through the form or contact me directly via
            the details below.
          </p>

          <div className="mb-4">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#F86D00]" />
              <a
                href="mailto:ashiqamohammed@gmail.com"
                className="text-sm hover:underline"
              >
               ashiqamohammed@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaPhoneAlt className="text-[#F86D00]" />
              <a href="tel:+919072050026" className="text-sm hover:underline">
                  +91 9072050026
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-start space-x-4 pt-3">
            <a href="https://www.linkedin.com/in/ashiqamohd">
              <FaLinkedinIn className="text-2xl text-white hover:text-[#F86D00] hover:-translate-y-1 transition-transform duration-200" />
            </a>
            <a href="https://github.com/ashiqmnb">
              <FiGithub className="text-2xl text-white hover:text-[#F86D00] hover:-translate-y-1 transition-transform duration-200" />
            </a>
            <a href="https://www.instagram.com/_asshhq___">
              <FaInstagram className="text-2xl text-white hover:text-[#F86D00] hover:-translate-y-1 transition-transform duration-200" />
            </a>
            <a href="https://leetcode.com/u/asshhq">
              <SiLeetcode className="text-2xl text-white hover:text-[#F86D00] hover:-translate-y-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
