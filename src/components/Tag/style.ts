import styled from "styled-components";
type Tag = {
  background: string;
};
export const Div = styled.div<Tag>`
  color: #fff;
  text-align: center;
  font-family: Lato;
  font-size: 15.145px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  display: inline-flex;
  padding: 8.414px 26.176px;
  justify-content: center;
  align-items: center;
  gap: 8.414px;
  background: ${(props) => props.background};
  border-radius: 5px;
  @media (max-width: 700px) {
    font-size: 11px;
    padding: 6.414px 19.176px;

  }
`;
