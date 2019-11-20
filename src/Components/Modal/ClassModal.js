import React, { useState } from 'react';
import { Dialog, Collapse, IconButton } from '@material-ui/core';
import { DateTimePicker } from '@material-ui/pickers';
import Input from '../Input/Input';
import { Content, SText, StyledButton } from '../styledComponents';

const ClassModal = (props) => {
  const { isOpen, handleClose } = props;
  const [collapse, setCollapse] = useState(false);
  const [formInputs, setFormInputs] = useState({ content: [] });
  const [content, setContent] = useState('');

  const handleChange = ({ name, value }) => {
    setFormInputs(prev => ({ ...prev, [name]: value }));
  };
  const handleDateChange = (date) => {
    setFormInputs(prev => ({ ...prev, time: date }));
  };
  const addContent = () => {
    setFormInputs(prev => ({ ...prev, content: [...prev.content, content] }));
    setCollapse(false);
  };
  return (
    <Dialog
      maxWidth="md"
      fullWidth
      open={isOpen}
      onClose={handleClose}
    >
      <Content flex align="center" borderBox>
        <Content vmargin="2em" width="80%" borderBox flex horizontal justify="space-between">
          <SText color="#394e5d" size="30px" weight="700">Add Class</SText>
          <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
            <div className="icon col-end">
                close
            </div>
          </IconButton>
        </Content>
        <Content vmargin="1em" width="80%" borderBox>
          <Input variant="outlined" label="Course Title" name="title" onChange={({ target }) => handleChange(target)} />
        </Content>
        <Content width="80%" flex horizontal vmargin="1em" justify="space-between" borderBox>
          <Input variant="outlined" label="Author" width="48%" name="author" onChange={({ target }) => handleChange(target)} />
          <DateTimePicker
            className="group"
            label="Date & Time"
            value={formInputs.time}
            onChange={handleDateChange}
            variant="outlined"
            inputVariant="outlined"
          />
        </Content>
        <Content width="80%" vmargin="1em" borderBox>
          <Input variant="outlined" label="Course Description" name="description" multiline rowsMax="4" onChange={({ target }) => handleChange(target)}/>
        </Content>
        <Content width="80%" flex horizontal align="center" justify="flex-start" borderBox>
          <SText color="#394e5d" size="18px">Content</SText>
          <IconButton>
            <div className="icon" onClick={() => setCollapse(true)}>
            add
            </div>
          </IconButton>
        </Content>
        <Content width="80%" vmargin="1em">
          <Collapse in={collapse} unmountOnExit>
            <Content flex width="100%" horizontal borderBox>
              <Content flexValue="2">
                <Input variant="outlined" label="item" name="item" onChange={({ target }) => setContent(target.value)} />
              </Content>
              <Content flexValue="1">
                <StyledButton color="primary" onClick={() => addContent()}>Add</StyledButton>
              </Content>
            </Content>
          </Collapse>
        </Content>
        <Content flex align="center" vmargin="1em">
          <StyledButton color="primary" width="40%" variant="outlined" onClick={() => handleClose()}>Submit</StyledButton>
        </Content>
      </Content>
    </Dialog>
  );
};

export default ClassModal;
