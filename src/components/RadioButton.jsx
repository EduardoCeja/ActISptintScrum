import React from "react";

const RadioButton = ({ options, value, setValue, ...props }) => {
    return (
      <>
        {options.map((op) => (
          <label key={op}>
            <input
              className='button-input'
              type="radio"
              value={op}
              checked={value === op}
              onChange={({ target }) => setValue(target.value)}
              {...props}
            />{" "}
            {/* capitalize first letter com 'replace()' */}
            {op.replace(/^\w/, (c) => c.toUpperCase())}
          </label>
        ))}
      </>
    );
  };
  
  export default RadioButton;
