import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-3 pt-5 grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-3 md:justify-center">
      <div className="flex gap-6 justify-center items-center">
        <Link
          to="/"
          className="text-white hover:text-blue-400 hover:underline"
        >
          Home
        </Link>
        <Link
          to="/jobs"
          className="text-white hover:text-blue-400 hover:underline"
        >
          Jobs
        </Link>
      </div>

      <div className="flex flex-col pt-3 justify-center items-center">
        <p className="text-sm"> &copy;Copyright, All rights reserved.</p>
      </div>

      <div></div>
    </div>
  );
}
