import React from 'react';
import { Dialog, IconButton, Slide } from '@material-ui/core';
import { Content, SText, StyledButton } from '../styledComponents';

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const FullScreenDialog = ({ isOpen, openModal }) => {
  const handleClose = () => {
    openModal(false);
  };

  return (
    <div>
      <Dialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
        <Content height="100%" overflow="scroll">
          <div className="banner">
            <Content height="100%" flex align="center" justify="flex-start">
              <Content flex horizontal height="3em" width="90%" justify="flex-start">
                <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                  <div className="icon col-end white">
                      close
                  </div>
                </IconButton>
              </Content>
              <Content flex width="90%" height="70%" justify="center">
                <SText color="#ffffff" size="60px" weight="700">English Comprehension</SText>
                <SText color="#ffffff" width="50%" size="20px">Learn essential skills to improve your English reading and writing skills and boost your chances of getting hired</SText>
                <Content tmargin="2em">
                  <StyledButton color="secondary" variant="outlined" width="10%">Enroll Now</StyledButton>
                </Content>
              </Content>
            </Content>
          </div>
          <Content id="body" flex align="center">
            <Content id="intro" vmargin="2em" align="center" flex justfy="center">
              <SText color="#394e5d" width="60%" weight="600" size="36px">What you will learn</SText>
              <SText color="#394e5d" width="60%" size="20px">
                Learn essential skills to improve your English reading and writing skills
                and boost your chances of getting hired. Learn essential skills to improve
                your English reading and writing skills and boost your chances of getting hired
                Learn essential skills to improve your English reading and writing skills and
                 boost your chances of getting hired
              </SText>
            </Content>
            <Content id="content" vmargin="2em" align="center" flex justfy="center">
              <SText color="#394e5d" width="60%" weight="600" size="36px">Content</SText>
              <SText color="#394e5d" width="60%" size="20px">Nouns</SText>
              <SText color="#394e5d" width="60%" size="20px">Pronouns</SText>
              <SText color="#394e5d" width="60%" size="20px">Verbs</SText>
              <SText color="#394e5d" width="60%" size="20px">Adjectives</SText>
              <SText color="#394e5d" width="60%" size="20px">Prepositions</SText>
            </Content>
            <Content id="author" width="60%" justify="flex-start" align="center" flex horizontal>
              <SText color="#394e5d" weight="600" size="24px">Authour</SText>
              <SText color="#394e5d" size="20px">: Stefanie Wessler</SText>
            </Content>
            <Content id="date" width="60%" justify="flex-start" align="center" flex horizontal>
              <SText color="#394e5d" weight="600" size="24px">Date</SText>
              <SText color="#394e5d" size="20px">: 24th November, 2019</SText>
            </Content>
            <Content vmargin="2em" flex align="center">
              <StyledButton color="primary" variant="outlined" width="10%">Enroll Now</StyledButton>
            </Content>
          </Content>
        </Content>
      </Dialog>
    </div>
  );
};

export default FullScreenDialog;
