import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ImageOne from "../assets/Miniatures/DSC_0484_result.png";
import ImageTwo from "../assets/Miniatures/DSC_0486_result.png";
import ImageThree from "../assets/Miniatures/DSC_0507_result.png";
import ImageFour from "../assets/Miniatures/DSC_0531_result.jpg";
// import ImageFive from "../assets/Miniatures/ukotoa.JPG";
// import ImageSix from "../assets/Miniatures/DSC_0202.JPG";
// import ImageSeven from "../assets/Miniatures/DSC_0207.JPG";
// import ImageEight from "../assets/Miniatures/DSC_0219.JPG";
// import ImageNine from "../assets/Miniatures/PXL_20240405_130929601.jpg";
// import ImageTen from "../assets/Miniatures/PXL_20240624_011745559.jpg";
// import ImageEleven from "../assets/Miniatures/PXL_20240720_024605978.jpg";
// import ImageTwelve from "../assets/Miniatures/PXL_20240720_024612681.jpg";

const images = [
  ImageOne,
  ImageTwo,
  ImageThree,
  ImageFour,
  // ImageFive,
  // ImageSix,
  // ImageSeven,
  // ImageEight,
  // ImageNine,
  // ImageTen,
  // ImageEleven,
  // ImageTwelve,
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "60%",
        height: "400px",
        margin: "0 auto",
        overflow: "hidden",
        borderRadius: "8px",
      }}
    >
      <Box
        component="img"
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translate(0, -50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translate(0, -50%)",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;
