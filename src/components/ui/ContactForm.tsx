import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Reset submission message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Teşekkürler!</strong>
          <span className="block sm:inline"> Mesajınız bize ulaştı. En kısa sürede sizinle iletişime geçeceğiz.</span>
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Adınız Soyadınız*
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="input-field"
          placeholder="Adınız ve soyadınız"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-posta Adresiniz*
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="input-field"
          placeholder="ornek@email.com"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefon Numaranız*
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="input-field"
          placeholder="05XX XXX XX XX"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mesajınız*
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="input-field resize-none"
          placeholder="Mesajınızı buraya yazın..."
        />
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Gönderiliyor...
          </span>
        ) : (
          <span className="flex items-center justify-center">
            <Send size={18} className="mr-2" />
            Gönder
          </span>
        )}
      </button>
      
      <p className="text-xs text-gray-500 mt-2">
        * ile işaretlenmiş alanların doldurulması zorunludur.
      </p>
    </form>
  );
};

export default ContactForm;