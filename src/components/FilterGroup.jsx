import React from 'react';

const FilterGroup = ({
  title,
  inputType = 'checkbox',
  options = [],
  selectedValues = [],
  onChange,
}) => {
  const groupName = `filter-${title?.toLowerCase().replace(/\s+/g, '-')}`;

  const handleInputChange = (optionValue) => {
    if (!onChange) return;
    if (inputType === 'radio') {
      onChange([optionValue]);
    } else {
      if (selectedValues.includes(optionValue)) {
        onChange(selectedValues.filter((v) => v !== optionValue));
      } else {
        onChange([...selectedValues, optionValue]);
      }
    }
  };

  return (
    <div className="my-4">
      <h4
        style={{
          fontSize: '14px',
          fontWeight: 700,
          color: 'var(--dark-gray-2)',
          marginBottom: '12px',
        }}
      >
        {title}
      </h4>

      <div className="flex flex-column gap-2">
        {options.map((option, index) => {
          const val = option.value ?? option.values ?? option.text;
          const isChecked = onChange ? selectedValues.includes(val) : undefined;

          return (
            <label
              key={index}
              className="flex align-items-center gap-2"
              style={{
                cursor: 'pointer',
                fontSize: '14px',
                color: 'var(--dark-gray-2)',
              }}
            >
              <input
                type={inputType}
                name={groupName}
                value={val}
                checked={isChecked}
                onChange={() => handleInputChange(val)}
                className="custom-filter-input"
                style={{
                  width: '22px',
                  height: '22px',
                  accentColor: 'var(--primary)',
                }}
              />
              <span>{option.text}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;
