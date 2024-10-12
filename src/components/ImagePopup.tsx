import React from "react";
import { ImageType } from "../types/imageTypes";

type ImagePopupProps = {
  selectedImage: ImageType | null;
  closePopup: () => void;
};

const ImagePopup: React.FC<ImagePopupProps> = ({
  selectedImage,
  closePopup,
}) => {
  if (!selectedImage) return null;

  return (
    <div className="popup" onClick={closePopup}>
      <img src={selectedImage.urls.full} alt={selectedImage.alt_description} style={{height:"90%"}} />
      <button onClick={closePopup}><h3>X</h3></button>
    </div>
  );
};

export default ImagePopup;
