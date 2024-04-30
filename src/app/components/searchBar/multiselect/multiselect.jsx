import styles from './multiselect.module.css';

function MultiSelect({ options, selectedOptions, setSelectedOptions }) {
  
  const handleOptionToggle = (optionName) => {
    if (selectedOptions.includes(optionName)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== optionName));
    } else {
      setSelectedOptions([...selectedOptions, optionName]);
    }
  };

  return (
    <>
      {options.map((option) => (
        <div
          key={option.id}
          className={selectedOptions.includes(option.id) ? styles.optionSelected : styles.option}
          onClick={() => handleOptionToggle(option.id)}
        >
          {option.name}
        </div>
      ))}
    </>
  );
};

export default MultiSelect;