import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sheikalmadeen@gmail.com' },
    { icon: Phone, label: '+91 8778517073' },
    { icon: MapPin, label: 'Tamil Nadu, India' },
  ];

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-white dark:bg-black relative overflow-hidden transition-colors duration-300"
    >

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,115,0,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,115,0,0.1),transparent_40%)]" />

      {/* 🔥 MAIN */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >

        {/* 🔥 TITLE */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="parallax-text text-3xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Let’s build something amazing together 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">

          {/* 🔥 LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
          >

            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                Let's talk about everything!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Open for freelance & collaborations 💡
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="text-black dark:text-white text-sm sm:text-base font-medium">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* 🔥 FORM */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-6"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-black dark:text-white text-sm"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-black dark:text-white text-sm"
              />
            </div>

            <input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-black dark:text-white text-sm"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Your Message..."
              className="w-full px-4 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl text-black dark:text-white text-sm"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 sm:py-4 bg-primary text-white rounded-xl font-medium active:scale-95 transition flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-5 h-5" />
            </button>

          </motion.form>

        </div>
      </motion.div>

      {/* 💬 WHATSAPP FLOATING */}
      <motion.a
        href="https://wa.me/918778517073"
        target="_blank"
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-14 h-14 sm:w-16 sm:h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 z-[9999]"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
      </motion.a>

    </section>
  );
}