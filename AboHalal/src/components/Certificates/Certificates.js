import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import EmpireHotel from "../../assets/Services/empire hotel.jpg";
import dhami from "../../assets/Services/dhami.jpg";
import abc from "../../assets/Services/abc.jpg";
import lotus from "../../assets/Services/lotus.jpg";

const Certificates = () => {
  const hotels = [
    { id: 1, name: "Empire Hotel", img: EmpireHotel },
    { id: 2, name: "Dhami Hotel", img: dhami },
    { id: 3, name: "ABC Hotel", img: abc },
    { id: 4, name: "Lotus Hotel", img: lotus },
  ];

  return (
    <>
      <div className="my-10 flex flex-col items-center justify-center">
        <p className="text-3xl font-bold mb-10">Select Hotel</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full px-10">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="border border-1 border-gray-200 bg-gray-100 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="p-4">
                {/* Link to the products page for the selected hotel */}
                <Link to={`/products/${hotel.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <img
                    src={hotel.img}
                    alt={hotel.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="mt-3 text-center font-bold text-xl">{hotel.name}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certificates;

