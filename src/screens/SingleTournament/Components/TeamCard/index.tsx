import { Div } from "./style";
import { useState } from "react";
import { motion } from "framer-motion";

// type Iprop = {
//   // type: string;
//   // value: any;
//   // onChange: any;
//   // label: string;
//   // required?: boolean;
// };

const TeamCard = () => {
  const [show, setShow] = useState<boolean>(false);
  
  return (
    <Div onClick={() => setShow(!show)}>
      <div className="box">
        {!show && (
          <div className="names">
            <div className="name">
              <div className="teamName">Bobby</div>
            </div>
          </div>
        )}
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="names"
          >
            <div className="name">
              <div className="teamName">Bobby</div>
            </div>
            <div className="PlayerNames">
              <div className="sin">Bob</div>
              <div className="sin">Bob</div>
              <div className="sin">Bob</div>
              <div className="sin">Bob</div>
            </div>
          </motion.div>
        )}
      </div>
    </Div>
  );
};
export default TeamCard;
