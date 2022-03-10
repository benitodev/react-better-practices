import React from "react";

const Logo = ({ marginTop = "0px" }) => {
  return (
    <img
      src="https://wpcom.files.wordpress.com/2020/05/icon-60-customize403x.png"
      alt=""
      style={{ width: "90px", height: "90px", marginTop: `${marginTop}` }}
    />
  );
};

export default Logo;
