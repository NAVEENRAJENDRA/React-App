import {FormInputLabel, Input, Group} from "./form-input.styles.jsx";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      {label && (
        <FormInputLabel
          shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}
      <Input {...otherProps} />
    </Group>
  );
};

export default FormInput;
