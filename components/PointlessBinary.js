import React, { useEffect } from "react";
import {
  PointlessBinaryStyles,
  PointlessBinaryDiv,
} from "../styles/dashBoard.module.scss";

const PointlessBinary = ({ runLog }) => {
  useEffect(() => {
    const randomDigit = () => {
      return Math.floor(Math.random() * Math.floor(2));
    };

    const generateRandomBinary = (binaryLength) => {
      let binary = "0b";
      for (let i = 0; i < binaryLength; ++i) {
        binary += randomDigit();
      }
      return binary;
    };

    const randBin = generateRandomBinary(24);
    var div = document.createElement("div");
    const colors = ["#f1b444", "#7ab35b", "#75d0c4", "#e63e1c"];
    const randInd = Math.floor(Math.random() * (colors.length - 1 - 0 + 1) + 0);
    const randColor = colors[randInd];
    div.style.color = randColor;
    div.id = runLog;
    div.innerHTML = randBin.substring(2, 24);
    const parent = document.getElementsByClassName(PointlessBinaryDiv)[0];
    if (!parent.childElementCount) {
      div.innerHTML = "**PROCESS__INITIATED**";
    } else if (parent.childElementCount === 1) {
      div.innerHTML = "*CONNECTING_TO_SERVER*";
    } else if (parent.childElementCount === 2) {
      div.innerHTML = "**CONNECTION_SECURED**";
    } else if (parent.childElementCount === 3) {
      div.innerHTML = "**HACKING__MAINFRAME**";
    }
    parent.prepend(div);
    // TODO: fix this mega smooth brain, right-before-the-weekend logic
    const randId = Math.floor(Math.random() * (50 - 1 - 0 + 1) + 0);
    const killChild = document?.getElementById(runLog - randId);
    if (parent.childElementCount > 24 && killChild) {
      parent.removeChild(killChild);
    }
  }, [runLog]);

  return (
    <div className={PointlessBinaryStyles}>
      <div>Application Logs</div>
      <div className={PointlessBinaryDiv}></div>
    </div>
  );
};

export default PointlessBinary;
