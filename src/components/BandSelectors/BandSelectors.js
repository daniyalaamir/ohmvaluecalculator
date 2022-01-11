import React from "react";
import { Button } from 'antd';
import { multiplier, tolerance, significantDigits } from "../../utils/maps/maps";
import SelectField from "../Select/SelectField";

function BandSelectors({ onSelectionChange }) {

  const onBandValueChange = (band, value, color) => {
    onSelectionChange(band, color, value);
  };

  return (
    <>
      <SelectField
        label="Band A"
        placeholder="Select Band A"
        optionsContext={significantDigits}
        onChange={(value, option) => onBandValueChange("first", value, option.key)}
      />
      <SelectField
        label="Band B"
        placeholder="Select Band B"
        optionsContext={significantDigits}
        onChange={(value, option) => onBandValueChange("second", value, option.key)}
      />
      <SelectField
        label="Band C"
        placeholder="Select Band C"
        optionsContext={multiplier}
        onChange={(value, option) => onBandValueChange("multiplier", value, option.key)}
      />
      <SelectField
        label="Band D"
        placeholder="Select Band D"
        optionsContext={tolerance}
        onChange={(value, option) => onBandValueChange("tolerance", value, option.key)}
      />
      <Button type="primary">Submit</Button>
    </>
  );
}

export default BandSelectors;
