import React, { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import BackToTopStyles from "./BackToTopStyles";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <BackToTopStyles isVisible={isVisible}>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <IoIosArrowDropupCircle className="top-btn--icon" />
        </div>
      )}
    </BackToTopStyles>
  );
};

export default BackToTop;
