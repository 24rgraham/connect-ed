import React, { createRef, useState } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";

export default function ImageUpload({ imageData, handleResponse }) {
  const [image, setImage] = useState("");

  const uploadImage = (files) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "connect_ed");
    Axios.post("https://api.cloudinary.com/dqv6cj4bc/image/upload", data).then(
      (res) => {
        console.log(res);
        handleResponse(res);
      }
    );
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <button type="button" onClick={uploadImage}>
        Upload Image
      </button>
      <div>
        {imageData && (
          <Image
            cloudName="dqv6cj4bc"
            publicId={`https://res.cloudinary.com/dqv6cj4bc/image/upload/v1668535173/${imageData.public_id}`}
          />
        )}
      </div>
    </div>
  );
}
