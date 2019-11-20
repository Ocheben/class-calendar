import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { StyledInput } from '../styledComponents';

export const styles = theme => ({
  label: {
    fontSize: '14px',
    transform: 'translate(14px, 12px)',
    marginTop: '0px'
  },
  input: {
    fontSize: '14px',
    padding: '0.8em',
  },
  inputFocused: {
    borderWidth: '1px',
    borderColor: 'green !important'
  }
});

const Input = (props) => {
  const {
    classes, InputProps, InputLabelProps, ...otherProps
  } = props;
  const textFieldProps = {
    InputLabelProps: {
      classes: {
        root: classes.label,
      },
      ...InputLabelProps
    },
    InputProps: {
      classes: {
        input: classes.input,
        focused: classes.inputFocused,
      },
      ...InputProps,
    },
    FormHelperTextProps: {
      className: 'formHelper'
    }
  };
  return (
    <StyledInput {...otherProps} {...textFieldProps} />
  );
};

export default withStyles(styles)(Input);
