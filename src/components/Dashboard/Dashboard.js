import React, { useState } from 'react'
import BandSelectors from "../BandSelectors/BandSelectors";
import Resistor from "../Resistor/Resistor";
import BandsProvider from "../../contexts/BandsContext";
import DisplayResistance from "../DisplayResistance/DisplayResistance";

export default function Dashboard() {
  const [bandsContext, setBandsContext] = useState({});

  const onSelectionChange = (band, color, value) => {
    setBandsContext((prev) => ({ ...prev, [band]: { color, value } }));
  };
  
  return (
    <BandsProvider value={bandsContext}>
      <div className="dashboard">
        <div className="dashboard_container">
          <Resistor />
          <DisplayResistance />
          <BandSelectors onSelectionChange={onSelectionChange} />
        </div>
      </div>
    </BandsProvider>
  )
}
