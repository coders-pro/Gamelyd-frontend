import styled from "styled-components";

export const Div = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
      max-height: 0;
    }
    to {
      opacity: 1;
      max-height: 100px; /* Adjust the max height as needed */
    }
  }
  .dropdown {
    background-color: #1f2731;
    color: #fff;
    text-align: right;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 93.2%; /* 20.262px */
    cursor: pointer;
    max-width: 300px;
    padding: 1px 5px;
    min-width: 100px;
    position: relative;
  }
  .options {
    position: absolute;
    background-color: #1f2731;
    width: 100%;
    left: 0;
    
  }
  .dropdown-option {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    animation: fadeIn 0.3s ease-in-out forwards;
    margin: 5px;
    padding: 5px;
    text-align: left;
    background-color: #1f2731;

  }
  .dropdown-header {
    margin: 5px;
    padding: 3px;
    /* border-bottom: 1px solid grey; */
    /* padding-bottom: 10px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .icn {
      width: 15px;
      margin-left: 10px;
    }
  }

  .dropdown.open .dropdown-options {
    animation: fadeIn 0.3s ease-in-out forwards;
  }

  .fader {
    transition: opacity 6s ease-in-out;
    opacity: 0;
  }

  .fade-in {
    opacity: 1;
  }
`;
