import CheckboxInput from './CheckboxInput';
import React from 'react';
import styled from 'styled-components';

export interface FooterProps {
    allChecked?: boolean;
    onClick: (v?: any) => void;
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
