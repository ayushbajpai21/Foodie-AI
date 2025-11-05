import emailjs from '@emailjs/browser';
import Nav from "./Nav";
import Footer from "./Footer";
import { useRef, useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    const YOUR_SERVICE_ID = "service_7q1jcwu";   // ✅ Replace with your actual service ID
    const YOUR_TEMPLATE_ID = "template_qe8yi2c";  // ✅ Replace with your actual template ID
    const PUBLIC_KEY = "VeRlHBQIkr_DuwbCz";      // ✅ Replace with your actual public key

    emailjs
      .sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("✅ Email sent successfully!");
          setShowPopup(true);        // ✅ show success animation
          form.current.reset();      // ✅ clear form
          setTimeout(() => setShowPopup(false), 2000); // hide after 3s
        },
        (error) => {
          console.log('❌ FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <Nav />
       <section className="bg-yellow-50 py-20 relative">
        {/* ✅ Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex justify-center items-center z-50">
            <div className="bg-white shadow-lg rounded-2xl px-10 py-6 text-center border border-orange-300 animate-bounce">
              <h2 className="text-2xl font-semibold text-green-600">✅ Message Sent!</h2>
              <p className="text-gray-600 mt-2">Thanks for contacting us, we'll get back to you soon.</p>
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="md:w-1/2">
            <img
              src="https://i.pinimg.com/736x/6f/6f/93/6f6f935c6bf69cd5fa0020ec2dab6e71.jpg"
              alt="Contact"
              className="rounded-3xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="md:w-1/2 bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center md:text-left">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6 text-center md:text-left">
              We'd love to hear from you! Fill out the form below and we will get back to you as soon as possible.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
