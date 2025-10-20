import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full mt-4">
          <button className="btn bg-base-100 justify-start py-6 join-item">
            <FaFacebook></FaFacebook> Facebook
          </button>
          <button className="btn bg-base-100 justify-start py-6 join-item">
            <FaTwitter></FaTwitter> Twitter
          </button>
          <button className="btn bg-base-100 justify-start py-6 join-item">
            <FaInstagram></FaInstagram> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
