import { Link } from "react-router-dom";
import { Style } from "./style";
import Navbar from "../../components/NavBar/Navbar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "../../components/Button/InnerButton";

const Card = (props: any) => {
  return (
    <>
      <Navbar message="jh" />
      <Style>
        <div className="top">
          <div className="pic">
            <AccountCircleIcon
              style={{ color: "white" }}
              sx={{ fontSize: 300 }}
            />
          </div>
          <div className="text">
            <div className="name">
              <div className="main">
                <div className="aha">Madu Mcbobby Chidiebere</div>
                <div className="user">@mcbobby</div>
                <div className="user">
                  {" "}
                  <LocationOnIcon sx={{ fontSize: 15 }} /> Nigeria
                </div>
              </div>
              <div className="socials">
                <TwitterIcon className="soc" />
                <FacebookIcon className="soc" />
                <LinkedInIcon className="soc" />
                <InstagramIcon className="soc" />
              </div>
            </div>
            <div className="buttons">
              <Button>Deactivate</Button>
              <Button>Edit</Button>
              {/* <Button>Button 1</Button> */}
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bio">
            <div className="head">Details</div>
            <div className="bod">
              <table>
                <tbody>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Email :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {" "}
                      madumcbobby@yahoo.com
                    </td>
                  </tr>
                  <tr>
                    <th style={{ padding: "10px", textAlign: "left" }}>
                      Mobile Number :
                    </th>
                    <td style={{ padding: "10px", textAlign: "left" }}>
                      {" "}
                      08161808836
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="det">
            <div className="head">Bio</div>
            <div className="bod">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                tempore culpa assumenda corrupti cumque vero ea, quos aspernatur
                recusandae eum sed eius fugit reprehenderit animi dolorem
                quibusdam, autem iste ipsum. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Est tempore culpa assumenda
                corrupti cumque vero ea, quos aspernatur recusandae eum sed eius
                fugit reprehenderit animi dolorem quibusdam, autem iste ipsum.
              </p>
            </div>
          </div>
        </div>
      </Style>
    </>
  );
};

export default Card;
