import { Link } from "react-router-dom";
import { CardStyle } from "./CardStyle";

// type Iprop = {
//   rank: any;
//   gameName: any;
//   gamename: any;
//   date: any;
//   // image2: any
//   gamer1: any;
//   gamer2: any;
//   // mainImage: any
//   tournamentId: any;
// };

const Card = (props: any) => {
  return (
    <CardStyle>
      <div className="game">
        <div className="rank">
          {props.data.tournamentmode === "MULTIPLAYER" ? "MP" : "BR"}
        </div>
        <div className="front">
          <img className="thumbnail" src="/images/nba.jpg" alt="fifa" />
          <h3 className="name">{props.data.name}</h3>
          <div className="stats">
            <p className="viewers">{props.data.date}</p>
            <div className="streamers">
              <div>{props.data.gamename}</div>
            </div>
          </div>
        </div>

        <div className="back">
          <div className="streaming-info">
            <p className="game-stat">
              Size
              <span className="span">{props.data.tournamentsize}</span>
            </p>
            <p className="game-stat">
              Active
              <span className="span">{props.data.active ? "Yes" : "No"}</span>
            </p>
          </div>
          <button className="btn">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/tournament/view/${props.data.tournamentid}`}
            >
              View Tournament
            </Link>
          </button>
          <div className="streamers">
            <div>{props.data.gamename}</div>
          </div>
        </div>
        <div className="background"></div>
      </div>
    </CardStyle>
  );
};

export default Card;
