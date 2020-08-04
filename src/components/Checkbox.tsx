import React, {ReactNode} from 'react';

import {ReactComponent as CheckboxCheckedSVG} from '../assets/checkbox-checked.svg';
import {ReactComponent as CheckboxSVG} from '../assets/checkbox.svg';
import styled from 'styled-components';

export interface CheckboxProps {
    value: boolean;
    onChange: (v: boolean) => void;
    label?: ReactNode;
}

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

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    padding-top: 18px;
`

const CheckboxElementLabel = styled.div`
    line-height: 19px;
    font-size: 1rem;
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
)

class Checkbox extends React.Component<CheckboxProps> {
    handleChange = event => {
        this.props.onChange(event);
    }

    render() {    
        return (
          <CheckboxWrapper>
            <CheckboxInput checked={this.props.value} name={this.props.label} onChange={this.handleChange} />
            <CheckboxElementLabel>{this.props.label}</CheckboxElementLabel>
          </CheckboxWrapper>
        );
    }
}

export default Checkbox;
