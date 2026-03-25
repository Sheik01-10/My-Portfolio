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
    { icon: Phone, label: 'Phone', value: '+91 8778517073' },
    { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India' },
  ];

  return (
    <section
      id="contact"
      className="py-32 bg-black relative overflow-hidden"
      style={{ perspective: '1200px' }}
    >

      {/* 🔥 BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,115,0,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,115,0,0.1),transparent_40%)] parallax-bg" />

      {/* 🔥 MAIN */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 150, rotateX: 40 }}
        animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
        transition={{ duration: 1 }}
        className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 origin-top"
      >

        {/* 🔥 TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="parallax-text text-5xl font-bold text-white mb-4 drop-shadow-[0_0_20px_rgba(255,115,0,0.5)]">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let’s build something amazing together 
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* 🔥 LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: 20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-8"
          >

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Open for freelance, collaboration & crazy ideas 💡
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -60 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.05,
                    rotateX: 8,
                    rotateY: -8,
                  }}
                  className="parallax-card flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* 🔥 FORM */}
          <motion.form
            initial={{ opacity: 0, x: 80, rotateY: -20 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6 parallax-card"
          >

            <div className="grid md:grid-cols-2 gap-6">
              <input name="name" value={formData.name} onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" />

              <input name="email" value={formData.email} onChange={handleChange}
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" />
            </div>

            <input name="subject" value={formData.subject} onChange={handleChange}
              placeholder="Subject"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" />

            <textarea name="message" value={formData.message} onChange={handleChange}
              rows={5} placeholder="Your Message..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white" />

            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-white rounded-xl font-medium hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/50"
            >
              Send Message <Send className="w-5 h-5" />
            </button>

          </motion.form>

        </div>
      </motion.div>

      {/* 💬 FLOATING WHATSAPP (3D EFFECT 🔥) */}
      <motion.a
        href="https://wa.me/918778517073"
        target="_blank"

        whileHover={{
          scale: 1.15,
          rotateX: 10,
          rotateY: -10,
        }}

        className="parallax-card absolute bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50 transition-all z-50 group"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* GLOW */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 blur-xl group-hover:opacity-60 transition"></div>

        {/* ICON */}
        <MessageCircle className="w-7 h-7 text-white relative z-10" />
      </motion.a>

    </section>
  );
}