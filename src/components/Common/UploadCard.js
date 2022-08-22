import React from "react";

// eslint-disable-next-line react/prop-types
const UploadCard = ({ fileSize, handleRemoveClick, name, ...props }) => {
  return (
    <div {...props}>
      <span>{fileSize}</span>
      <span>{name}</span>
      <span onClick={handleRemoveClick}>REMOVE</span>
    </div>
  );
};

export default UploadCard;
