import img1 from "../images/Sweater/blueSweater.jpg";
import img2 from "../images/Sweater/brownSweater.jpg";
import img3 from "../images/Sweater/christmasSweater.jpg";
import img4 from "../images/Sweater/orangeSweater.jpg";
import img5 from "../images/Sweater/whiteSweater.jpg";

const SweaterObject = () => {
  const SweaterList = [
    {
      id: 11,
      src: img1,
      alt: "blueSweater",
    },
    {
      id: 21,
      src: img2,
      alt: "brownSweater",
    },
    {
      id: 31,
      src: img3,
      alt: "christmasSweater",
    },
    {
      id: 41,
      src: img4,
      alt: "orangeSweater",
    },
    {
      id: 51,
      src: img5,
      alt: "whiteSweater",
    },
  ];
  return SweaterList;
};

export default SweaterObject;
