import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }

    if (!formData.details.trim()) {
      newErrors.details = "Details are required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // simulate submit
      setTimeout(() => {
        alert("Form submitted successfully!");
        setIsSubmitting(false);
        setFormData({
          email: "",
          firstName: "",
          lastName: "",
          phone: "",
          details: "",
        });
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex font-[lato] flex-col items-center px-4 py-8">
      <h1 className="text-lg font-semibold text-center mb-4 text-[#7B3F3F]">
        Contact us
      </h1>

      <form
        className="w-full max-w-2xl space-y-4"
        onSubmit={handleSubmit}
        noValidate
      >
        <div>
          <label className="block text-sm font-medium font-[montserrat] text-gray-700 mb-1">
            Contact
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-[montserrat] font-medium text-gray-700 mb-1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full border ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block text-sm font-[montserrat] font-medium text-gray-700 mb-1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full border ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]`}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-[montserrat] font-medium text-gray-700 mb-1">
            Details
          </label>
          <textarea
            rows="5"
            name="details"
            placeholder="Details"
            value={formData.details}
            onChange={handleChange}
            className={`w-full border ${
              errors.details ? "border-red-500" : "border-gray-300"
            } rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]`}
          />
          {errors.details && (
            <p className="text-red-500 text-xs mt-1">{errors.details}</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#000000] text-white font-medium cursor-pointer py-2 px-6 rounded-md transition-all duration-200 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-[#D4AF37] hover:text-black"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
