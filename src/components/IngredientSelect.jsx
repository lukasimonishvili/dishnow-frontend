import Select from "react-select";
import { Controller } from "react-hook-form";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    minHeight: "56px",
    background: "#FFFFFF",
    borderWidth: "1px 1px 2px 1px",
    borderStyle: "solid",
    borderColor: state.selectProps.error ? "#D92D2A" : "#E3E3E3",
    borderRadius: "15px",
    fontFamily: "Inter, sans-serif",
    fontSize: "14px",
    fontWeight: 400,
    lineHeight: "145%",
    paddingLeft: "4px",
    outline: "none",
    boxShadow: "none",
    cursor: "pointer",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 8px",
    gap: "4px",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    padding: "0 4px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    fontSize: "13px",
    color: "#333",
    padding: "2px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#666",
    ":hover": {
      backgroundColor: "#e5e5e5",
      color: "#000",
      borderRadius: "50%",
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "8px",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: "8px",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "10px",
    overflow: "hidden",
    zIndex: 10,
  }),
};

const IngredientSelect = ({
  control,
  name,
  options,
  rules,
  error,
  placeholder,
  onChange,
}) => {
  return (
    <div style={{ width: "100%" }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select
            {...field}
            isMulti
            options={options}
            placeholder={placeholder}
            styles={customStyles}
            error={error}
            onChange={(selected) => {
              if (onChange) onChange(selected);
              return field.onChange(selected);
            }}
            value={field.value}
          />
        )}
      />
      {error && (
        <span style={{ color: "#D92D2A", fontSize: "12px" }}>
          {error.message}
        </span>
      )}
    </div>
  );
};

export default IngredientSelect;
