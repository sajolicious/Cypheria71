import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

interface FooterProps {
  
}

const Footer: React.FC<FooterProps> = () => {
  const position = [23.174194, 90.1739155]; 
  
  return (
    <div className="flex flex-col space-y-5 bg-black pt-[10px]">
      <div className="md:flex md:flex-row lg:w-[90%] lg:mx-auto flex-col space-y-10 px-4 lg:px-8 md:justify-between">
        <div className="flex flex-col space-y-7 md:space-y-4">
          <div className="font-libre text-[40px] text-start font-bold text-white">
            We Are Here
          </div>
          <div className="space-y-4">
            <div className="font-libre text-[16px] font-normal text-white">
              <FaPhone className="w-6 h-6 mr-2 inline-block" />
              +880 1953363167
            </div>
            <div className="font-libre text-[16px] font-normal  text-white">
              <FaEnvelope className="w-6 h-6 mr-2 inline-block" />
              info@cypheria71.com
            </div>
            <div className="font-libre text-[16px] font-normal  text-white">
              <FaMapMarkerAlt className="w-6 h-6 mr-2 inline-block" />
              Dhanmondi32
              <br /> Dhaka
              <br />
              Khulna, Bangladesh
            </div>
          </div>
        </div>
        <div className="space-y-5 md:space-y-4">
          <div className="input-container relative">
            <input
              type="email"
              placeholder="Enter Your email"
              className="outline-none border-b-2 border-gray-500 w-[300px] mx-auto bg-transparent"
            />
            <img
              className="absolute right-0 top-3"
              src="img/paperPlane.png"
              alt=""
            />
          </div>
          <div>
            <p className="text-lg text-white pb-2">
              Subscribe to our Newsletter
            </p>
          </div>
          <div className="w-fit mx-auto">
            {/* Use react-leaflet for the map */}
            <MapContainer
              center={position}
              zoom={13}
              style={{ width: "300px", height: "300px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>Your location</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="flex justify-between gap-2">
            <p className="lg:text-[24px] text-[16px] font-popp font-medium text-white">
              Attach with us
            </p>
            <div className="flex items-center">
              <div className="w-[20px] border-[1px] border-[#F93737] h-0"></div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <div className="text-xl">
                <a href="#">
                  <FaFacebook className="text-white" />
                </a>
              </div>
              <div className="text-xl">
                <a href="#">
                  <FaTwitter className="text-white" />
                </a>
              </div>
              <div className="text-xl">
                <a href="#">
                  <FaLinkedin className="text-white" />
                </a>
              </div>
              <div className="text-xl">
                <a href="#">
                  <FaInstagram className="text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="font-libre text-white text-center py-2 mx-auto border-white md:border-[#313234]">
        © 2023│All rights reserved by Cypheria71
      </div>
    </div>
  );
};

export default Footer;
