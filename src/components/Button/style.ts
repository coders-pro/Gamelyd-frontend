import styled from "styled-components";

type Button = {
  theme: string;
};

export const Style = styled.div<Button>`
  border: ${(props) =>
    props.theme === "dark"
      ? "1px solid #fff"
      : props.theme === "pink"
      ? "#BD185A"
      : props.theme === "green"
      ? "rgba(6, 92, 87, 0.50);"
      :props.theme === "active"
      ? "#065C57"
      :props.theme === "danger"
      ? "rgba(213, 66, 79, 0.50)"
      : "1px solid #0db0a5"};
  background: ${(props) =>
    props.theme === "dark"
      ? "#1f2731"
      : props.theme === "pink"
      ? "#BD185A"
      : props.theme === "green"
      ? "rgba(6, 92, 87, 0.50);"
      : props.theme === "active"
      ? "#065C57"
      :props.theme === "danger"
      ? "rgba(213, 66, 79, 0.50)"
      : "var(--gradient,linear-gradient(96deg, #0bc0b4 -29.36%, #242e39 102.77%))"};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 13px;
  color: white;
  font-weight: 500;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  @media (max-width: 700px) {
    font-size: 9px;
  }
`;
