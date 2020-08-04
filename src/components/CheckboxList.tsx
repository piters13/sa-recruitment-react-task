import React, {ReactNode} from 'react';

import Checkbox from './Checkbox';
import styled from 'styled-components';

export interface CheckboxListProps {
	items: {
		id: string;
		code: string;
		label: ReactNode;
		required: boolean;
	}[];
	name: string;
	value?: string[];
	onChange: (v: string[]) => void;
}

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
    handleClick = (event) => {
        this.props.onChange(event);
    }
    
    render() {
        const checkboxes = this.props.items.map((item) => 
                                        <Checkbox key={item.code}
                                                  label={item.label}
                                                  value={item.required}
                                                  onChange={this.handleClick} />
        );

        return (
            <CheckboxCard>
                <CompanyName>{this.props.name}</CompanyName>
                {checkboxes}
            </CheckboxCard>
        )
    }
}


export default CheckboxList;
