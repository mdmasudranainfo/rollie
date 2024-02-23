"use client";

import Button from "@/components/utilityComponent/button/Button";
import { useState } from "react";
import Select from "react-select";

const ShippingAddress = () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = () => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className="">
      <h2 className="text-lg pt-5">Shipping address</h2>
      <form>
        {/* country  */}
        <div className="">
          <label className="py-2 block" htmlFor="country">
            Country
          </label>
          <Select
            id="country"
            value={selectedOption}
            options={options}
            placeholder="Select a country"
          />
        </div>

        {/* First_Name  */}
        <div className="pt-2">
          <label className="py-2 block" htmlFor="First Name">
            First Name
          </label>
          <input
            name="First_Name"
            className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
            type="text"
            id="First Name"
            placeholder="First Name"
          />
        </div>
        {/* last_Name  */}
        <div className="pt-2">
          <label className="py-2 block" htmlFor="Last_Name">
            Last Name
          </label>
          <input
            name="last_Name"
            className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
            type="text"
            id="Last_Name"
            placeholder="Last Name"
          />
        </div>

        {/* Company  */}
        <div className="pt-2">
          <label className="py-2 block" htmlFor="Company">
            Company (optional)
          </label>
          <input
            name="Company"
            className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
            type="text"
            id="Company"
            placeholder="Company"
          />
        </div>
        {/* Address  */}
        <div className="pt-2">
          <label className="py-2 block" htmlFor="Address">
            Address
          </label>
          <input
            name="Address"
            className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
            type="text"
            id="Address"
            placeholder="Address"
          />
        </div>
        {/* Apartment  */}
        <div className="pt-2">
          <label className="py-2 block" htmlFor="Apartment">
            Apartment, suite, etc. (optional)
          </label>
          <input
            name="Apartment"
            className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
            type="text"
            id="Apartment"
            placeholder="Apartment"
          />
        </div>
        {/* Apartment  */}
        <div className="pt-2">
          <label className="py-2 block" htmlFor="Apartment">
            Apartment, suite, etc. (optional)
          </label>
          <input
            name="Apartment"
            className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
            type="text"
            id="Apartment"
            placeholder="Apartment"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* City  */}
          <div className="pt-2">
            <label className="py-2 block" htmlFor="City">
              City
            </label>
            <input
              name="City"
              className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
              type="text"
              id="City"
              placeholder="City"
            />
          </div>
          {/* Postal_code  */}
          <div className="pt-2">
            <label className="py-2 block" htmlFor="Postal_code">
              Postal code
            </label>
            <input
              name="Postal_code"
              className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
              type="number"
              id="Postal_code"
              placeholder="Postal_code"
            />
          </div>
        </div>
        {/* Phone  */}
        <div className="pt-2">
          <label className="py-2 block" htmlFor="Phone">
            Phone
          </label>
          <input
            name="Phone"
            className="border-2 p-1 w-full focus:outline-none focus:border-black ease-in duration-300"
            type="number"
            id="Phone"
            placeholder="Phone"
          />
        </div>

        {/* button */}
        <div className="flex justify-end mt-4">
          <button
            className="bg-[#15151f] hover:bg-[#383849] text-white rounded-full px-4 py-2 duration-300 ease-in"
            type="submit"
          >
            Continue to shipping
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
