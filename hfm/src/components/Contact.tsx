import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'innovationhub@mitwpu.edu.in',
      action: 'mailto:innovationhub@mitwpu.edu.in'
    },
    // {
    //   icon: Phone,
    //   title: 'Phone',
    //   details: '+91 20 7117 2000',
    //   action: 'tel:+912071172000'
    // },
    // {
    //   icon: MapPin,
    //   title: 'Address',
    //   details: 'MIT-WPU Campus, Survey No. 124, Paud Road, Kothrud, Pune - 411038',
    //   action: 'https://maps.google.com'
    // }
  ];

  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'hover:text-blue-600' },
    // { icon: Twitter, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'hover:text-red-500' }
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl font-bold mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to join our innovation community? Have questions about our programs? 
            We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.action}
                    className="flex items-start space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <IconComponent className="h-6 w-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-300 text-sm">{info.details}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      className={`p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 ${social.color} transition-colors duration-200`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Campus Map */}
            {/* <motion.div
              className="mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-3">Campus Location</h4>
              <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Interactive Map Coming Soon</p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              {submitStatus === 'success' && (
                <motion.div
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <span className="text-green-300">Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <span className="text-red-300">Something went wrong. Please try again.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 border ${
                        errors.name ? 'border-red-500' : 'border-white/20'
                      } rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white placeholder-gray-400`}
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="mt-1 text-red-400 text-sm">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 border ${
                        errors.email ? 'border-red-500' : 'border-white/20'
                      } rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white placeholder-gray-400`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${
                      errors.subject ? 'border-red-500' : 'border-white/20'
                    } rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white placeholder-gray-400`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="mt-1 text-red-400 text-sm">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${
                      errors.message ? 'border-red-500' : 'border-white/20'
                    } rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 text-white placeholder-gray-400 resize-none`}
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-400 text-sm">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 bg-yellow-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-gray-900 border-t-transparent"></div>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;