import { ReactComponent as CheckboxCheckedSVG } from '../assets/checkbox-checked.svg';
import { ReactComponent as CheckboxSVG } from '../assets/checkbox.svg';
import React from 'react';
import styled from 'styled-components';

export interface FooterProps {
    allChecked?: boolean;
    onClick?: (v?: any) => void;
}

const StyledFooter = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30px;
	z-index: 5;
	background: #ffffff;
`;

const CheckSVG = styled(CheckboxSVG)`
    padding-right: 13px;
    width: 24px;
    height: 24px;
    fill: #CED0D9;
`

const CheckedSVG = styled(CheckboxCheckedSVG)`
    padding-right: 13px;
    width: 24px;
    height: 24px;
    fill: #CED0D9;
    #checkmark {
        fill: #FF4A55;
    }
`

const Button = styled.button`
    background: #FF4A55;
    border-radius: 32px;
    font-size: 1rem;
    color: #FFFFFF;
    border: 1px solid #FF4A55;
    padding: 9px 28px;
`

const CheckboxElementLabel = styled.div`
    line-height: 19px;
    font-size: 1rem;
`

const CheckboxWrapper = styled.label`
    display: flex;
    align-items: center;
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

class Footer extends React.Component<FooterProps> {
    handleChange = event => {
        let checked = event.target.checked;

        this.props.onClick(checked);
    }

    render() {
        return (
            <StyledFooter>
                <CheckboxWrapper>
                    <CheckboxInput checked={this.props.allChecked} onChange={this.handleChange} />
                    <CheckboxElementLabel>Select all</CheckboxElementLabel>
                </CheckboxWrapper>
                <Button>Confirm</Button>
            </StyledFooter>
        )
    }
}

export default Footer;
