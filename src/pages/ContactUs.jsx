import React from "react";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-4 py-8">
      {/* Title */}
      <h1 className="text-lg font-semibold text-center mb-4 text-[#7B3F3F]">Contact us</h1>

      {/* Form */}
      <form className="w-full max-w-2xl space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
          <textarea
            rows="5"
            placeholder="Details"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#7B3F3F]"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#7B3F3F] text-white font-medium py-2 px-6 rounded-md hover:bg-[#5e2e2e] transition-all duration-200 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsPage;
