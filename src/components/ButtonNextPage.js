import React from "react";

const ButtonNextPage = ({ handleClick }) => {
  return (
    <button onClick={handleClick} style={{ marginTop: "15px" }}>
      next page
    </button>
  );
};

export default ButtonNextPage;
