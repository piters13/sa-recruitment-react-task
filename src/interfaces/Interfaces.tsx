import {ReactNode} from 'react';

export interface Company {
	id: number;
	uuid: string;
	name: string;
	group: number;
	description: string;
	departments: Department[];
}

export interface Department {
	label: string;
	code: string;
	required: boolean;
}

export interface CheckboxListProps {
	items: {
		code: string;
		label: ReactNode;
		required: boolean;
	}[];
	name: string;
	value?: string[];
	onChange: (v: string[]) => void;
}

export interface CheckboxProps {
    value: boolean;
    onChange: (v: boolean) => void;
    label?: ReactNode;
}