import React from "react";

import { crewFareLogo } from "@assets";

interface HeaderProps {
  imageUrl?: string;
  altText: string;
}

export const Header: React.FC<HeaderProps> = ({
  imageUrl = crewFareLogo,
  altText,
}) => {
  return (
    <header className="bg-header py-5 center justify-center flex">
      {/* {imageUrl ? (
        <img src={imageUrl} alt={altText} className="w-[165px] h-[40px]" />
      ) : (
        <span>{altText}</span>
      )} */}
    </header>
  );
};
