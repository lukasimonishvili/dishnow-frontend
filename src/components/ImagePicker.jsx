import { useState } from "react";
import styled from "styled-components";
import { Controller } from "react-hook-form";

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadLabel = styled.label`
  display: inline-block;
  background: #f5f5f5;
  border: 1px solid ${(props) => (props.error ? "#D92D2A" : "#E3E3E3")};
  border-radius: 15px;
  padding: 12px 20px;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  width: 100%;
`;

const ImagePicker = ({ control, name, rules, error, placeholder }) => {
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (files, onChange) => {
    const fileArray = Array.from(files);
    setPreviewImages(fileArray.map((file) => URL.createObjectURL(file)));
    onChange(fileArray);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { onChange } }) => (
        <div>
          <UploadLabel htmlFor={name} error={error}>
            {error ? error.message : placeholder}
          </UploadLabel>
          <FileInput
            id={name}
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => handleImageChange(e.target.files, onChange)}
          />

          {previewImages.length > 0 && (
            <ImagePreviewContainer>
              {previewImages.map((src, index) => (
                <ImagePreview key={index} src={src} alt={`preview-${index}`} />
              ))}
            </ImagePreviewContainer>
          )}
        </div>
      )}
    />
  );
};

export default ImagePicker;
