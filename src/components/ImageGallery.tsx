import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageType } from "../types/imageTypes";

type ImageGalleryProps = {
  images: ImageType[];
  openImagePopup: (image: ImageType) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({
  images,
  openImagePopup,
}) => {
    return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 5 }}>
        <Masonry columnsCount={3} gutter="1px">
          {images.map((image) => (
            <img
              key={image.id}
              src={image.urls.small}
              alt={image.alt_description}
              style={{ width: "100%", display: "block", cursor: "pointer" }}
              onClick={() => openImagePopup(image)}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    );
};

export default ImageGallery;
