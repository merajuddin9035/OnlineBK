import React, { useEffect, useState } from "react";

function CheckOut() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
      state: "",
      city: "",
    });
  };

  return (
    <>
      <div className=" text-center align-middle flex flex-row justify-center">
       Please fill your details to move forward
      </div>
      <div className="flex ">
        <div className="max-w-md mx-auto my-10 ">
          <h2 className="text-3xl my-5 bg-teal-600 text-white text-center rounded-lg py-3 px-7 font-bold">
            Basic Information
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 font-bold">
                <label htmlFor="firstName" className="block mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label htmlFor="lastName" className="block mb-1 font-bold">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <label htmlFor="email" className="block mb-1 font-bold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label htmlFor="phone" className="block mb-1 font-bold">
                  Mobile Number:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2">
                <label htmlFor="email" className="block mb-1 font-bold">
                  State:
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-2">
                <label htmlFor="city" className="block mb-1 font-bold">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block mb-1 font-bold">
                Full Address:
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Continue to Shipping
            </button>
          </form>
        </div>

        <div className="my-10 mx-20">
          <h2 className="text-3xl my-5 bg-teal-500 text-white text-center rounded-lg py-3 px-20 font-bold">
            Order Summary
          </h2>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-10 py-3">Product</th>
                <th className="px-10 py-3">Price</th>
                <th className="px-10 py-3">Quantity</th>
                <th className="px-10 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2 font-bold" colSpan="2">
                  Grand Total
                </td>
                <td className="border px-4 py-2 font-bold"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
