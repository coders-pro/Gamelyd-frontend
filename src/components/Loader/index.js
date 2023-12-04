import "./style.css";
import Logo from "../../assets/images/icon.png";

const ButtonLoader = (props) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          zIndex: "1000",
          width: "100wh",
        }}
      >
        <div
          style={{
            background: "rgba(0, 0, 0, 0.5)",
            height: "100vh",
            width: "100vw",
            position: "absolute",
            margin: 0,
            padding: 0,
            top: 0,
            left: 0,
          }}
        />
        <div className="bodyses">
          <div className="ringses">
            <img
              style={{ width: "100px", marginTop: "20px" }}
              src={Logo}
              alt="logo"
            />
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonLoader;
