import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Show success message (you could implement a toast notification here)
    alert('Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sectionBgClass = theme === 'light' ? 'bg-[#c7c7c7]' : '';
  const textColorClass = theme === 'light' ? 'text-slate-900' : 'text-slate-300';
  const inputBgClass = theme === 'light' ? 'bg-white/50' : 'bg-slate-900/50';
  const inputBorderClass = theme === 'light' ? 'border-slate-400' : 'border-slate-600';
  const placeholderColorClass = theme === 'light' ? 'placeholder-slate-500' : 'placeholder-slate-400';


  return (
    <section id="contact" className={`py-20 px-6 ${sectionBgClass}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className={`text-xl ${textColorClass} max-w-3xl mx-auto`}>
            Ready to start your next project? Let's discuss how we can work together 
            to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <a href='mailto:clintonokeke56@gmail.com' 
              className={`flex items-center gap-4 p-4 rounded-xl border hover:border-blue-500/50 transition-all duration-200 interactive ${inputBgClass} ${inputBorderClass}`}>
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColorClass}`}>Email</h3>
                  <p className={textColorClass}>clintonokeke56@gmail.com</p>
                </div>
              </a>

              <a href='tel:+2348107099231' 
              className={`flex items-center gap-4 p-4 rounded-xl border hover:border-blue-500/50 transition-all duration-200 interactive ${inputBgClass} ${inputBorderClass}`}>
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColorClass}`}>Phone</h3>
                  <p className={textColorClass}>+234 8107099231</p>
                </div>
              </a>

              <div className={`flex items-center gap-4 p-4 rounded-xl border hover:border-blue-500/50 transition-all duration-200 interactive ${inputBgClass} ${inputBorderClass}`}>
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${textColorClass}`}>Location</h3>
                  <p className={textColorClass}>Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
              <h3 className={`text-xl font-semibold mb-4 ${textColorClass}`}>Let's Create Something Great</h3>
              <p className={`${textColorClass} leading-relaxed`}>
                I'm always interested in new opportunities and exciting projects. 
                Whether you're a startup looking for a technical co-founder or an 
                established company needing development expertise, let's talk!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className={`block text-sm font-medium ${textColorClass}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white ${inputBgClass} ${inputBorderClass} ${placeholderColorClass}`}
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className={`block text-sm font-medium ${textColorClass}`}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white ${inputBgClass} ${inputBorderClass} ${placeholderColorClass}`}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className={`block text-sm font-medium ${textColorClass}`}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white ${inputBgClass} ${inputBorderClass} ${placeholderColorClass}`}
                placeholder="Project Discussion"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className={`block text-sm font-medium ${textColorClass}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white resize-none ${inputBgClass} ${inputBorderClass} ${placeholderColorClass}`}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="interactive w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-700 px-8 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </> 
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;