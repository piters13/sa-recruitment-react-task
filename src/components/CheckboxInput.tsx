import {ReactComponent as CheckboxCheckedSVG} from '../assets/checkbox-checked.svg';
import {ReactComponent as CheckboxSVG} from '../assets/checkbox.svg';
import React from 'react';
import styled from 'styled-components';

const CheckedSVG = styled(CheckboxCheckedSVG)`
    padding-right: 13px;
    width: 24px;
    height: 24px;
    fill: #CED0D9;
    #checkmark {
        fill: #FF4A55;
    }
`

const CheckSVG = styled(CheckboxSVG)`
    padding-right: 13px;
    width: 24px;
    height: 24px;
    fill: #CED0D9;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

const CheckboxInput = ({checked, ...props}) => (
  <>
    <HiddenCheckbox checked={checked} {...props} />
    {checked ? <CheckedSVG /> : <CheckSVG />}
  </>
);

export default CheckboxInput;