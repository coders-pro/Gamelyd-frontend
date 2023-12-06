import React, { useRef, useState } from "react";
import { Div } from "./style";

import Card from "../../../../components/GameCard";
import fifa from "../../../../assets/images/fifa.png";
import leftArrow from "../../../../assets/icons/leftArrow.svg";
import rightArrow from "../../../../assets/icons/rightArrow.svg";
import { Link } from "react-router-dom";

type IProp = {
  //   message: string
  //   time : string
};

const Tournament = (props: IProp): any => {
  const divRef = useRef(null);

  const scrollLeft = () => {
    const div: any = divRef.current;
    div.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const div: any = divRef.current;
    div.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <Div>
      <img
        src={leftArrow}
        alt="left arrow"
        onClick={scrollLeft}
        className="icon"
      />
      <div className="sliderContainer" ref={divRef}>
        <Link to="/tournament/new/:imageId">
          <Card background={fifa} name="Fifa"></Card>
        </Link>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
        <Card background={fifa} name="Fifa"></Card>
      </div>
      <img
        src={rightArrow}
        alt="right arrow"
        onClick={scrollRight}
        className="icon"
      />
    </Div>
  );
};

export default Tournament;
