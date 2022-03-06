import styled from "styled-components";

export const Style = styled.div`
  width: 90vw;
  margin: auto;
  .nfl a,
  .mlb a,
  .nhl a,
  .pga a {
    text-decoration: none;
    transition: color 0.2s ease-out;
  }
  .nfl a {
    color: rgba(79, 192, 210, 1);
  }
  .nfl a:hover {
    color: darken(rgba(79, 192, 210, 1), 20%);
  }
  .mlb a {
    color: rgba(79, 192, 210, 1);
  }
  .mlb a:hover {
    color: darken(rgba(79, 192, 210, 1), 20%);
  }
  .nhl a {
    color: rgba(79, 192, 210, 1);
  }
  .nhl a:hover {
    color: darken(rgba(79, 192, 210, 1), 20%);
  }
  .pga a {
    color: rgba(79, 192, 210, 1);
  }
  .pga a:hover {
    color: darken(rgba(79, 192, 210, 1), 20%);
  }

  /* wrapper */
  .wrapper {
    width: 100%;
    /* max-width: 1000px; */
    margin: 20px auto 100px auto;
    padding: 0;
    background: rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
    overflow: hidden;
    position: relative;
  }

  /* lists */
  .row ul {
    margin: 0;
    padding: 0;
  }
  .row ul li {
    margin: 0;
    font-size: 16px;
    font-weight: normal;
    list-style: none;
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    @media only screen and (max-width: 767px) and (min-width: 480px) {
      font-size: 13px;
    }
    @media only screen and (max-width: 479px) {
      font-size: 13px;
    }
  }

  .title ul li {
    padding: 15px 13px;
  }
  .row ul li {
    padding: 5px 10px;
  }

  /* rows */
  .row {
    padding: 20px 0;
    height: 30px;
    font-size: 0;
    position: relative;
    overflow: hidden;
    transition: all 0.2s ease-out;
    border-top: 1px solid darken(rgba(255, 255, 255, 0.1), 100%);
  }
  .row:hover {
    background-color: lighten(rgba(0, 0, 0, 0.9), 10%);
    height: 65px;
    @media only screen and (max-width: 767px) {
      height: 85px;
    }
    @media only screen and (max-width: 359px) {
      height: 105px;
    }
  }
  .title {
    padding: 25px 0 5px 0;
    height: 45px;
    font-size: 0;
    background-color: rgba(255, 255, 255, 0.1);
    border-left: 3px solid lighten(rgba(255, 255, 255, 0.1), 100%);
  }
  .title:hover {
    height: 45px;
    background-color: rgba(255, 255, 255, 0.1);
    border-left: 3px solid lighten(rgba(255, 255, 255, 0.1), 100%);
  }

  .title-hide {
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }

  .nfl {
    border-left: 3px solid darken(rgba(79, 192, 210, 1), 30%);
  }
  .nfl:hover {
    border-left: 3px solid rgba(79, 192, 210, 1);
  }
  .mlb {
    border-left: 3px solid darken(rgba(79, 192, 210, 1), 30%);
  }
  .mlb:hover {
    border-left: 3px solid rgba(79, 192, 210, 1);
  }
  .nhl {
    border-left: 3px solid darken(rgba(79, 192, 210, 1), 30%);
  }
  .nhl:hover {
    border-left: 3px solid rgba(79, 192, 210, 1);
  }
  .pga {
    border-left: 3px solid darken(rgba(79, 192, 210, 1), 30%);
  }
  .pga:hover {
    border-left: 3px solid rgba(79, 192, 210, 1);
  }

  /* row one - fadeIn */
  .row-fadeIn-wrapper {
    opacity: 0;
    font-size: 0;
    height: 0;
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease-out;
    animation: fadeIn 0.4s ease-out 2s 1 alternate;
    animation-fill-mode: forwards;
  }
  .row-fadeIn-wrapper:hover {
    height: 35px;
    @media only screen and (max-width: 767px) {
      height: 55px;
    }
    @media only screen and (max-width: 359px) {
      height: 75px;
    }
  }

  .fadeIn {
    padding: 20px 0;
    font-size: 0;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .fadeIn:hover {
    background-color: lighten(rgba(0, 0, 0, 0.9), 10%);
  }

  /* row two - fadeOut */
  .row-fadeOut-wrapper {
    font-size: 0;
    overflow: hidden;
    position: relative;
    transition: all 0.2s ease-out;
    animation: fadeOut 0.4s ease-out 8s 1 alternate;
    animation-fill-mode: forwards;
    opacity: 1;
    height: 65px;
  }
  .row-fadeOut-wrapper:hover {
    height: 100px;
  }

  /* update content */
  .update-row {
    animation: update 0.5s ease-out 12s 1 alternate;
  }
  .update1 {
    position: absolute;
    top: 25px;
    display: inline-block;
    opacity: 1;
    animation: update1 1s ease-out 12s 1 alternate;
    animation-fill-mode: forwards;
  }
  .update2 {
    position: absolute;
    top: 25px;
    display: inline-block;
    opacity: 0;
    animation: update2 4s ease-out 13s 1 alternate;
    animation-fill-mode: forwards;
  }

  /* more content */
  ul.more-content li {
    position: relative;
    top: 22px;
    font-size: 13px;
    margin: 0;
    /* padding: 10px 13px; */
    padding-bottom: 20px;
    display: block;
    height: 50px;
    width: 100%;
    color: darken(rgba(255, 255, 255, 0.9), 50%);
    @media only screen and (max-width: 767px) {
      font-size: 11px;
    }
  }

  /* small content */
  .small {
    color: darken(rgba(255, 255, 255, 0.9), 60%);
    font-size: 10px;
    padding: 0 10px;
    margin: 0;
    @media only screen and (max-width: 767px) {
      display: none;
    }
  }

  /* keyframe animations */
  @keyframes fadeIn {
    from {
      background: rgba(255, 255, 255, 0.1);
      opacity: 0;
      padding: 0;
    }
    to {
      background: darken(rgba(255, 255, 255, 0.1), 80%);
      opacity: 1;
      padding: 0 0 65px 0;
    }
  }
  @keyframes fadeOut {
    from {
      background: darken(rgba(255, 255, 255, 0.1), 80%);
      opacity: 1;
      height: 65px;
    }
    to {
      background: rgba(255, 255, 255, 0.1);
      opacity: 0;
      height: 0;
    }
  }
  @keyframes update {
    0% {
      background: darken(rgba(255, 255, 255, 0.1), 80%);
    }
    50% {
      background: rgba(255, 255, 255, 0.1);
    }
    100% {
      background: darken(rgba(255, 255, 255, 0.1), 80%);
    }
  }
  @keyframes update1 {
    0% {
      opacity: 0;
    }
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes update2 {
    0% {
      opacity: 0;
      color: rgba(255, 255, 255, 0.9);
    }
    20% {
      opacity: 1;
      color: rgba(79, 192, 210, 1);
    }
    100% {
      opacity: 1;
      color: rgba(255, 255, 255, 0.9);
    }
  }
  .editButton {
    cursor: pointer;
    background-color: #00ccff;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    color: black;
  }
  input {
    border: none;
    outline: none;
    height: 20px;
    width: 50px;
  }
`;
