import Checkbox from './Checkbox';
import { CheckboxListProps } from '../interfaces/Interfaces';
import React from 'react';
import styled from 'styled-components';

const CheckboxCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 10px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
`

const CompanyName = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    color: #282828;
`

class CheckboxList extends React.Component<CheckboxListProps> {
    handleClick = (event): void => {
        this.props.onChange(event);
    }
    
    render() {
        const checkboxes = this.props.items.map(item => (
			<Checkbox key={item.code} 
                      label={item.label} 
                      value={item.required} 
                      onChange={this.handleClick} />
		));

        return (
			<CheckboxCard>
				<CompanyName>{this.props.name}</CompanyName>
				{checkboxes}
			</CheckboxCard>
		);
    }
}


export default CheckboxList;
