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

const UserCard = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <Div onClick={() => setShow(!show)}>
      <div className="image">
        <img
          src="https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/girl.png?updatedAt=1701589631511"
          alt="user icon"
        />
      </div>
      <div className="name">
        <div className="main">Bobby</div>
        <div className="userName">@Mccbobby</div>
      </div>
    </Div>
  );
};
export default UserCard;
