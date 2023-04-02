import { FieldProps } from "formik";
import React from "react";
import Select from "react-select";

export const SelectTag = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false
}) => {

    const colourStyles = {
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: 'black',
            outline: 'none',
            paddingLeft: '0px',
            border: 'none'
          }),

        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                color: 'rgba(255, 255, 255, 0.3)',
                fontFamily: 'Gilroy600'
            }
        },
        
        control: (styles, { data, isDisabled, isFocused, isSelected }) => ({ ...styles, 
            backgroundColor: 'black', 
            outline: 'none', 
            borderRadius: '0px',
            color: 'white',
            border: 'none',
            boxShadow: isFocused ? 'rgba(255, 255, 255) 0px 2px' : 'rgba(255, 255, 255, 0.3) 0px 1px',
            fontFamily: 'Gilroy600',
            "&:hover": {
                boxShadow: 'rgba(255, 255, 255) 0px 2px',
                cursor: 'text'
            }
        }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => {
          return {
            ...styles,
            backgroundColor: 'rgb(26, 26, 26)',
            color: '#FFF',
            borderRadius: '5px',
            border: 'solid 1px white',
            marginBottom: '5px',
            cursor: isDisabled ? 'not-allowed' : 'default',
            fontSize: '20px',
            padding: '5px',
            paddingLeft: '10px',
            fontFamily: 'Gilroy600',
            "&:hover": {
                backgroundColor: "rgb(76 76 76)",
                cursor: 'pointer'
            }
          }
        },
      };
  const onChange = (option) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option).map((item) => item.value)
        : (option).value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : "";
    }
  };

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
      styles={colourStyles}
      components={{
        IndicatorSeparator: () => null
      }}
      theme={(theme) => ({
        ...theme,
        borderRadius: 0,
        colors: {
        ...theme.colors,
          neutral80: 'white',
          neutral40: 'white'
        },
      })}
    />
  );
};

export default SelectTag;
