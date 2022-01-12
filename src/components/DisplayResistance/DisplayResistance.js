import React, { useEffect, useState } from "react";
import { useBandsContext } from "../../contexts/BandsContext";
import { calculateOhmValue, getOhmString } from "../../utils/calculateOhmValue";

function DisplayResistance() {
  const { first, second, multiplier, tolerance } = useBandsContext();
  const [resistanceValue, setResistanceValue] = useState(null);
  
  useEffect(() => {
    const resistance = calculateOhmValue(first?.value, second?.value, multiplier?.value);
    const displayValue = resistance >= 0 ? `${getOhmString(resistance)} ±${tolerance?.value ?? 0}%` : "";
    if(first?.value >= 0 || second?.value >= 0) {
      setResistanceValue(displayValue);
    }
  }, [first, second, multiplier, tolerance]);

  return (
    <div className="display_result">
      <label className="label">Resistance: </label>
      <span className="value"> {resistanceValue}</span>
    </div>
  );
}

export default DisplayResistance;
