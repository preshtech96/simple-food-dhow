import React from 'react';
import imgadvag from "../assets/imgadvag.jpg";

const Step3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:pt-10 pt-6 md:gap-22 gap-8 px-4">
      
      <div>
        <img className="w-full max-w-xs md:max-w-sm" src={imgadvag} alt="advag" />
      </div>

      <div className="flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-blue-900 text-2xl md:text-3xl">Maecenas nulla neque</h1>
        <p className="text-sm md:text-base">
          Redistributing this template as a downloadable ZIP file on <br className="hidden md:block" />
          any template collection site is strictly prohibited. You will <br className="hidden md:block" />
          need to <span className="text-blue-800 font-bold">
            <a href="#">talk to us</a>
          </span> for additional permissions about our <br className="hidden md:block" />
          templates. Thank you.
        </p>
        <div className="flex md:justify-end justify-center">
          <button className="border border-gray-800 px-4 py-2 cursor-pointer hover:bg-gray-500 hover:text-white font-bold">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
