import React from "react";
import { Select } from "antd";
const { Option } = Select;

function SelectField({ label, optionsContext, placeholder, onChange }) {
  
  const getOptions = () => {
    let options = [];
    for (let [index, [key, option]] of Object.entries(Object.entries(optionsContext))) {
      let { value, text } = option;
      options.push(
        <Option key={key} value={value}>
          {text}
        </Option>
      );
    }
    return options;
  };

  return (
    <div className="select_container">
      <label>{label}</label>
      <Select
        showSearch
        onChange={onChange}
        placeholder={placeholder}
        optionFilterProp="children"
        filterOption={(input, option) => {
          return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
        }}
        filterSort={(optionA, optionB) => optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())}
      >
        {getOptions()}
      </Select>
    </div>
  );
}

export default SelectField;
