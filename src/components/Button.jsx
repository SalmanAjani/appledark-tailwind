import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`py-4 mt-6 px-6 font-poppins font-medium text-[18px] text-white bg-pink-900 rounded-[10px] outline-none ${styles}`}
  >
    Redirect
  </button>
);

export default Button;
