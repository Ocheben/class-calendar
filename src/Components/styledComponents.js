import styled, { css, keyframes } from 'styled-components';
import { Button, TextField } from '@material-ui/core';

export const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

export const noAnimation = keyframes`
  0% {
    opacity:1;
  }
  100% {
    opacity:1;
  }
`;

export const fadeAnimation = css`
    animation: ${fadeIn} 2s liner;
`;
export const Content = styled.div`
  display: ${props => (props.flex ? 'flex' : props.display || 'block')};
  width: ${props => (props.width || '100%')};
  height: ${props => props.height || 'auto'};
  min-height: ${props => (props.minHeight || 0)};
  flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
  margin: ${props => (props.tmargin || props.vmargin || props.margin || 0)} ${props => (props.rmargin || props.hmargin || props.margin || 0)} ${props => (props.bmargin || props.vmargin || props.margin || 0)} ${props => (props.lmargin || props.hmargin || props.margin || 0)};
  padding: ${props => (props.vpadding || props.padding || 0)} ${props => (props.hpadding || props.padding || 0)};
  background: ${props => props.bg || 'transparent'};
  flex: ${props => props.flexValue || '1 1 1'};
  justify-content: ${props => (props.justify || 'center')};
  align-items: ${props => (props.align || 'left')};
  /* border-right: 1px solid ${props => (props.rborder || 'transparent')}; */
  /* border-radius: ${props => (props.borderR || props.borderTl || 5)} ${props => (props.borderR || props.borderTr || 5)} ${props => (props.borderR || props.borderBr || 5)} ${props => (props.borderR || props.borderBl || 5)}; */
  border-top-left-radius: ${props => (props.borderR || props.borderTl || 0)};
  border-top-right-radius: ${props => (props.borderR || props.borderTr || 0)};
  border-bottom-right-radius: ${props => (props.borderR || props.borderBr || 5)};
  border-bottom-left-radius: ${props => (props.borderR || props.borderBl || 5)};
  overflow: ${props => (props.overflow || 'visible')};
  box-sizing: ${props => (props.borderBox ? 'border-box' : 'content-box')};
  box-shadow: ${props => (props.shadow ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : 'none')};
  animation: ${props => (props.fadeIn ? fadeIn : noAnimation)} 0.5s linear;
  transition: ${props => (props.animHeight && 'height 0.6s')};
  position: ${props => (props.position || 'relative')};
  border-left: ${props => (props.borderColor && `6px solid ${props.borderColor}`)};
  @media(max-width: 768px) {
    flex-direction: ${props => (props.mobHorizontal ? 'row' : 'column')};
    height: ${props => props.mobHeight || 'auto'};
    min-height: ${props => props.mobMinHeight || '2em'};
    width: ${props => props.mobWidth || 'auto'};
    justify-content: ${props => (props.mobJustify || 'center')};
    align-items: ${props => (props.mobAlign || 'left')};
  }
`;

export const SText = styled.p`
  text-align: ${props => (props.align || 'left')};
  font-size: ${props => (props.size || '17px')};
  font-weight: ${props => (props.weight || '400')};
  color:  ${props => (props.color || '#000000')};
  margin: ${props => (props.vmargin || 0)} ${props => (props.hmargin || 0)};
  line-height: ${props => (props.lineHeight || 1.6)};
  width: ${props => (props.width || 'auto')};
  @media(max-width: 768px) {
    font-size: ${props => (props.mobSize || props.size || '17px')};
  }
`;

export const StyledButton = styled(Button)`
    && {
        width: ${props => (props.width || '100%')};
    }
`;

export const StyledInput = styled(TextField)`
    && {
        width: ${props => (props.width || '100%')};
        margin: ${props => (props.vmargin || 0)} ${props => (props.hmargin || 0)};
    }
`;
