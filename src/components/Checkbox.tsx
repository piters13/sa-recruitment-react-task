import CheckboxInput from './CheckboxInput';
import { CheckboxProps } from '../interfaces/Interfaces';
import React from 'react';
import styled from 'styled-components';

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
    padding-top: 18px;
`

const CheckboxElementLabel = styled.div`
    line-height: 19px;
    font-size: 1rem;
`

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
