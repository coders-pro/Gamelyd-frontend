import { Div } from "./style";
import Button from "../../../components/Button";
import { useState } from "react";
import Fixture from "../Components/Fixture";
import UserCard from "../Components/UserCard";

// type Iprop = {
//   // type: string;
//   // value: any;
//   // onChange: any;
//   // label: string;
//   // required?: boolean;
// };

const Register = () => {
  return (
    <Div>
      <div className="con">
        <div className="in">
          <input type="text" placeholder="Team Name" />
          <div className="but">
            <Button theme="dark">Register</Button>
          </div>
        </div>

        <div className="team">
          <div className="tit">Select Teammates</div>
          <input type="text" placeholder="Search Username" />{" "}
          <div className="selected">
            <div className="select">
              <div className="name">Mcbobby</div>
              <div className="cancel">
                <img
                  src="https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/cancel.svg?updatedAt=1702198051653"
                  alt="remove"
                />
              </div>
              <div className="userName">@mcbobby</div>
            </div>
            <div className="select">
              <div className="name">Mcbobby</div>
              <div className="cancel">
                <img
                  src="https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/cancel.svg?updatedAt=1702198051653"
                  alt="remove"
                />
              </div>
              <div className="userName">@mcbobby</div>
            </div>
            <div className="select">
              <div className="name">Mcbobby</div>
              <div className="cancel">
                <img
                  src="https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/cancel.svg?updatedAt=1702198051653"
                  alt="remove"
                />
              </div>
              <div className="userName">@mcbobby</div>
            </div>
            <div className="select">
              <div className="name">Mcbobby</div>
              <div className="cancel">
                <img
                  src="https://ik.imagekit.io/dmkczkqll/Gamelyd/Icons/cancel.svg?updatedAt=1702198051653"
                  alt="remove"
                />
              </div>
              <div className="userName">@mcbobby</div>
            </div>
          </div>
        </div>
        <div className="users">
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
          <div className="user">
            <UserCard />
          </div>
        </div>
      </div>
    </Div>
  );
};
export default Register;
