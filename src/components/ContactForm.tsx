import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    serviceType: "Others",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (service) => {
    setFormData((prev) => ({
      ...prev,
      serviceType: service,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        serviceType: "web-development",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <div className=" bg-white py-12 sm:py-16 lg:py-20 border border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Let's Build the Future of Hospitality Together
          </h1>
          <p className="text-base sm:text-lg text-gray-900 max-w-full sm:max-w-2/3 px-4">
            Have questions or need a demo? Our team is here to help 24/7.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row bg-[#fbfdff] border border-gray-100 rounded-lg lg:rounded-none overflow-hidden">
          {/* Left Panel - Contact Information */}
          <div className="relative flex-1 order-2 lg:order-1">
            <div className="min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-gradient-to-br from-purple-700 via-purple-600 to-purple-500 p-6 sm:p-8 lg:p-12 text-white h-full relative overflow-hidden">
              {/* Decorative Background Elements */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-pink-400 to-orange-300 rounded-full opacity-70 transform translate-x-20 translate-y-20"></div>
              <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400 rounded-full opacity-80"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-purple-100 mb-12 text-lg">
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>

                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-purple-200" />
                    </div>
                    <span className="text-lg">+0123 4567 8910</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-purple-200" />
                    </div>
                    <span className="text-lg">hello@flowbase.com</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-purple-200" />
                    </div>
                    <span className="text-lg">102 Street 2714 Don</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="bg-white p-6 sm:p-8 flex-1 flex flex-col justify-center items-start order-1 lg:order-2">
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                Message sent successfully! We'll get back to you within 24
                hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                There was an error sending your message. Please try again.
              </div>
            )}

            <div className="space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  required
                />
                <input
                  placeholder="Last Name"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  placeholder="Mail"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  required
                />
                <input
                  placeholder="Phone"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  What the of website do you need?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      value="web-design"
                      checked={formData.serviceType === "web-design"}
                      onChange={() => handleServiceChange("web-design")}
                      className="sr-only"
                    />
                    <div
                      className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all duration-200 ${
                        formData.serviceType === "web-design"
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          formData.serviceType === "web-design"
                            ? "border-purple-500 bg-purple-500"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.serviceType === "web-design" && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium whitespace-nowrap">Web Design</span>
                    </div>
                  </label>

                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      value="logo-design"
                      checked={formData.serviceType === "logo-design"}
                      onChange={() => handleServiceChange("logo-design")}
                      className="sr-only"
                    />
                    <div
                      className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all duration-200 ${
                        formData.serviceType === "logo-design"
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          formData.serviceType === "logo-design"
                            ? "border-purple-500 bg-purple-500"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.serviceType === "logo-design" && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">Logo Design</span>
                    </div>
                  </label>

                  <label className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="serviceType"
                      value="other"
                      checked={formData.serviceType === "other"}
                      onChange={() => handleServiceChange("other")}
                      className="sr-only"
                    />
                    <div
                      className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all duration-200 ${
                        formData.serviceType === "other"
                          ? "border-purple-500 bg-purple-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          formData.serviceType === "other"
                            ? "border-purple-500 bg-purple-500"
                            : "border-gray-300"
                        }`}
                      >
                        {formData.serviceType === "other" && (
                          <div className="w-full h-full rounded-full bg-white scale-50"></div>
                        )}
                      </div>
                      <span className="text-sm font-medium">Other</span>
                    </div>
                  </label>
                </div>
              </div> */}

              {/* Message Field */}
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Write your message.."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                required
              ></textarea>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`bg-gray-900 text-white px-8 py-3 rounded-full text-md font-light hover:bg-gray-800 transition cursor-pointer ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r shadow-lg hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
