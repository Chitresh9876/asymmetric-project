import React, { useState, useEffect } from "react";
import { fetchImages } from "./services/unsplashApi";
import ImageGallery from "./components/ImageGallery";
import ImagePopup from "./components/ImagePopup";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import { ImageType } from "./types/imageTypes";
import './styles/App.css';

const App: React.FC = () => {
  const [images, setImages] = useState<ImageType[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useInfiniteScroll(() => {
    setPage((prev) => prev + 1);
  });

  useEffect(() => {
    const loadImages = async () => {
      const newImages = await fetchImages(page);
      setImages((prev) => [...prev, ...newImages]);
      setLoading(false);
    };
    loadImages();
  }, [page]);

  return (
    <>
      <ImageGallery images={images} openImagePopup={setSelectedImage} />
      <ImagePopup
        selectedImage={selectedImage}
        closePopup={() => setSelectedImage(null)}
      />
      {loading && <p>Loading more images...</p>}
    </>
  );
};

export default App;
