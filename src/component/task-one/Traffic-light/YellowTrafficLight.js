import React, {useState, useEffect} from "react";

const YellowTrafficLight = (props) => {
    const [active, setActive] = useState(false);
    useEffect(()=>{
      if (props.count > 0) {
        setActive(true)
      }else if (props.count == 0) {
        setActive(false)
      }
    }, [props.count])
    return (
      <div>
        {active ? (
          <div className="traffic-light__item bg-yellow">{props.count}</div>
        ) : (
          <div className="traffic-light__item"></div>
        )}
      </div>
    );
  };
  

export default YellowTrafficLight;
