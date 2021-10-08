import React from "react";
import Quantity, {count} from "./Quantity";


const TotalQuantity = () => {


    let sum = 0;
    for (let a of count)
    sum += a;

    function sumOfAll(count) {


    return (
      <>  
      <span>{sum}</span>
      </> 
    )
    }
    };

export default TotalQuantity;

