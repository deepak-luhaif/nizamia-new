import React, { useState } from "react";
import axios from "axios";

export const VanillaGalleryUpload = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]); // For uploaded image URLs (from backend)
  const [imagePreviews, setImagePreviews] = useState([]); // For local previews

  const uploadImage = async (files) => {
    if (!files) return;

    setLoading(true);
    try {
      const formData = new FormData();
      Array.from(files).forEach((file) => {
        formData.append("gallery", file, file.name);
      });

      // Sending files to backend API (adjust the URL according to your backend)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/upload/gallery`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Append newly uploaded images (URLs from the response) to the state
      setImages((prevImages) => [...prevImages, ...data]);

      // For previewing locally, we use URL.createObjectURL
      const newPreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
    } catch (error) {
      console.error("Error uploading images", error);
    } finally {
      setLoading(false);
    }
  };

  const removeImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);

    setImages(updatedImages);
    setImagePreviews(updatedPreviews);
  };

  return (
    <div className="border w-full p-4">
      {loading ? (
        <div className="mb-4 flex gap-4 w-full h-full">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-[125px] w-[250px] bg-gray-300 animate-pulse rounded-xl"
            ></div>
          ))}
        </div>
      ) : (
        <>
          {imagePreviews.length > 0 ? (
            <div>
              <div className="mb-4 flex gap-4 w-full h-full flex-wrap">
                {imagePreviews.map((url, index) => (
                  <div
                    key={index}
                    className="relative w-[150px] h-[150px] rounded-md overflow-hidden"
                  >
                    <div className="absolute top-2 right-2 z-10">
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="bg-red-500 text-white p-1 rounded"
                      >
                        X
                      </button>
                    </div>
                    <img
                      src={url}
                      alt={`Preview ${index}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label>Add more files</label>
                <input
                  type="file"
                  name="file"
                  multiple
                  onChange={(e) => uploadImage(e.target.files)}
                  className="mt-2"
                />
              </div>
            </div>
          ) : (
            <input
              type="file"
              name="file"
              multiple
              onChange={(e) => uploadImage(e.target.files)}
              className="mt-2"
            />
          )}
        </>
      )}
    </div>
  );
};
