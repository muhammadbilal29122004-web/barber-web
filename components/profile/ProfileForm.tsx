"use client";

import { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

interface ProfileFormProps {
  initialData?: {
    firstName?: string;
    secondName?: string;
    email?: string;
    phoneNumber?: string;
    dob?: string;
  };
}

export default function ProfileForm({ 
  initialData = {
    firstName: "John",
    secondName: "Doe",
    email: "abc123@mail.com",
    phoneNumber: "0000-2224445",
    dob: "24 years",
  }
}: ProfileFormProps) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCancel = () => {
    setFormData(initialData);
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving profile:", formData);
  };

  return (
    <>
      <div className="bg-[#1a1a1a] rounded-lg p-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Avatar Section */}
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#FE9A00]">
              <Image
                src="/icons/profile.png"
                alt="Profile Avatar"
                width={160}
                height={160}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="flex-1">
            <div className="space-y-6">
              {/* First Name and Second Name in two columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label htmlFor="firstName" className="block text-white text-sm font-medium mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9A00] transition-colors"
                  />
                </div>

                {/* Second Name */}
                <div>
                  <label htmlFor="secondName" className="block text-white text-sm font-medium mb-2">
                    Second Name
                  </label>
                  <input
                    type="text"
                    id="secondName"
                    name="secondName"
                    value={formData.secondName}
                    onChange={handleChange}
                    className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9A00] transition-colors"
                  />
                </div>
              </div>

              {/* Email - Full Width */}
              <div>
                <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9A00] transition-colors"
                />
              </div>

              {/* Phone Number - Full Width */}
              <div>
                <label htmlFor="phoneNumber" className="block text-white text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9A00] transition-colors"
                />
              </div>

              {/* DOB - Full Width */}
              <div>
                <label htmlFor="dob" className="block text-white text-sm font-medium mb-2">
                  DOB
                </label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full bg-[#2a2a2a] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE9A00] transition-colors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons - Outside the form card */}
      <div className="flex gap-4 mt-6 justify-start">
        <SecondaryButton
          onClick={handleCancel}
          className="px-6 py-3"
        >
          Cancel
        </SecondaryButton>
        <PrimaryButton
          onClick={handleSave}
          className="px-6"
        >
          Save
        </PrimaryButton>
      </div>
    </>
  );
}

