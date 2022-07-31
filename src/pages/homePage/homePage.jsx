import React, { useEffect, useState } from "react";

import Header from "../../components/header/header";
import HomepageDetails from "./features/homepageDetails/homepageDetails";
import HomepageTile from "./features/homepageTile/homepageTile";
import HomepageScroll from "./features/homepageScroll/homepageScroll";

import PictureOne from "../../assets/images/pictureOne.jpg";
import PictureTwo from "../../assets/images/pictureTwo.jpg";
import PictureThree from "../../assets/images/pictureThree.jpg";
import PictureFour from "../../assets/images/pictureFour.jpg";
import PictureFive from "../../assets/images/pictureFive.jpg";

const HomePage = () => {
  const homepageBackgroundsArray = [
    PictureOne,
    PictureTwo,
    PictureThree,
    PictureFour,
    PictureFive,
  ];

  const tileBackgroundsArray = [
    PictureOne,
    PictureTwo,
    PictureThree,
    PictureFour,
    PictureFive,
  ];

  const [backgroundNumber, setBackgroundNumber] = useState(0);
  const [homepageBackground, setHomepageBackground] = useState(
    homepageBackgroundsArray[0]
  );
  const [tileBackground, setTileBackground] = useState(tileBackgroundsArray[0]);

  useEffect(() => {
    switch (backgroundNumber) {
      case 0:
        setHomepageBackground(homepageBackgroundsArray[0]);
        setTileBackground(tileBackgroundsArray[0]);
        break;
      case 1:
        setHomepageBackground(homepageBackgroundsArray[1]);
        setTileBackground(tileBackgroundsArray[1]);
        break;
      case 2:
        setHomepageBackground(homepageBackgroundsArray[2]);
        setTileBackground(tileBackgroundsArray[2]);
        break;
      case 3:
        setHomepageBackground(homepageBackgroundsArray[3]);
        setTileBackground(tileBackgroundsArray[3]);
        break;
      case 4:
        setHomepageBackground(homepageBackgroundsArray[4]);
        setTileBackground(tileBackgroundsArray[4]);
        break;
      default:
        setHomepageBackground(homepageBackgroundsArray[0]);
        setTileBackground(tileBackgroundsArray[0]);
        break;
    }
  }, [backgroundNumber]);

  return (
    <div
      className="homepage"
      style={{
        backgroundImage: `url(${homepageBackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />
      <div className="homepage-content">
        <HomepageDetails backgroundNumber={backgroundNumber} />
        <div className="homepage-tiles">
          <HomepageTile tileBackground={tileBackground} />
          <HomepageScroll
            backgroundNumber={backgroundNumber}
            setBackgroundNumber={setBackgroundNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
