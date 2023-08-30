import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Carddiv } from "./style";
import Card from "../../components/Card/Card";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const RLSlider = (props) => {
  const [id] = useState(uuidv4());
  const rightSlide = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft + 300;
  };
  const leftSlide = () => {
    var slider = document.getElementById(id);
    slider.scrollLeft = slider.scrollLeft - 300;
  };
  return (
    <div>
      <Carddiv>
        <MdChevronLeft
          size={40}
          className="MdChevronLeft"
          onClick={leftSlide}
        />
        <div className="title">{props.header}</div>
        <div className="div1">
          <div className="div2" id={id}>
            {props.data && (
              <>
                {props.data.map((datum) => (
                  <Card
                    key={datum.tournamentid}
                    data={datum}
                    // mainImage={car.mainImage}
                  />
                ))}
              </>
            )}
          </div>
        </div>
        <MdChevronRight
          size={40}
          className="MdChevronRight"
          onClick={rightSlide}
        />
      </Carddiv>
    </div>
  );
};

export default RLSlider;
