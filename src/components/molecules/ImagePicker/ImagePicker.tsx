import React, { useState } from "react";

import { archiveUpload } from "@assets";

interface ImagePickerProps {
  onImageUpload?: (image: string) => void;
  defaultImage?: string | null;
  overlayTitle?: string;
}

export const ImagePicker: React.FC<ImagePickerProps> = ({
  onImageUpload,
  defaultImage,
  overlayTitle,
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string | null>(
    defaultImage || null
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageUpload = (image: string) => {
    setBackgroundImage(image);
    if (onImageUpload) onImageUpload(image);
  };

  const handleFileChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => handleImageUpload(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => handleImageUpload(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(event.type === "dragover");
  };

  const handleClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = handleFileChange;
    input.click();
  };

  const containerClasses = `relative w-full h-[244px] rounded-2xl border-primary/10 border-dashed flex flex-col gap-[12px] justify-center items-center cursor-pointer transition-all duration-300 ease-in-out
    ${isDragging || isHovered ? "bg-accent" : "bg-selection"} 
    ${backgroundImage ? "bg-cover bg-center border-transparent" : "border"}`;

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={containerClasses}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
      }}
    >
      {!isDragging && !isHovered && backgroundImage && overlayTitle && (
        <span
          className="text-white text-center px-4 bg-header/15 
          flex-1 w-full flex items-center justify-center rounded-2xl
          font-bold text-4xl"
        >
          {overlayTitle}
        </span>
      )}

      {(!backgroundImage || isDragging || isHovered) && (
        <>
          <img src={archiveUpload} alt="archive upload" />
          <span className="text-center font-semibold text-base">
            {isDragging ? "Release to upload image" : "Click or drop image"}
          </span>
        </>
      )}
    </div>
  );
};
