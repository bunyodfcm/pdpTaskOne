import React, { useState, useEffect } from "react";
import GreenTrafficLight from "./GreenTrafficLight";
import RedTrafficLight from "./RedTrafficLight";
import "./traffic-light.css";
import YellowTrafficLight from "./YellowTrafficLight";

const TrafficLight = () => {
  const [red, setRed] = useState(4);
  const [yellow, setYellow] = useState(2);
  const [green, setGreen] = useState(5);
  const [propsRed, setPropsRed] = useState(0);
  const [propsYellow, setPropsYellow] = useState(0);
  const [propsGreen, setPropsGreen] = useState(0);
  const [wred, setwRed] = useState(0);
  const [wyellow, setwYellow] = useState(0);
  const [wgreen, setwGreen] = useState(0);
  useEffect(() => {
    setwRed(red);
    setwYellow(yellow);
    setwGreen(green);
  }, []);

  useEffect(() => {
    if (red > 0) {
      const a = setInterval(() => {
          setRed((prev) => prev - 1);
          setPropsRed(red)
          setPropsYellow(0)
          setPropsGreen(0)
          clearInterval(a);
        }, 1000);
    } else if (red == 0 && yellow > 0) {
        const a = setInterval(() => {
            setYellow((prev) => prev - 1);
            setPropsRed(0)
            setPropsYellow(yellow)
            setPropsGreen(0)
            clearInterval(a);
        }, 1000);
    } else if (red == 0 && yellow == 0 && green > 0) {
        const a = setInterval(() => {
            setGreen((prev) => prev - 1);
            setPropsRed(0)
            setPropsYellow(0)
            setPropsGreen(green)
        clearInterval(a);
      }, 1000);
    } else if (red == 0 && yellow == 0 && green == 0) {
        setRed(wred)
        setYellow(wyellow)
        setGreen(wgreen)
    }
  }, [red, yellow, green]);
  return (
    <div className="traffic-light">
      <div className="traffic-light__wrapper">
        <RedTrafficLight count={propsRed} />
        <YellowTrafficLight count={propsYellow} />
        <GreenTrafficLight count={propsGreen} />
      </div>
    </div>
  );
};

export default TrafficLight;
