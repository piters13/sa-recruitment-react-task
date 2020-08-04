import React, { RefObject } from 'react';

import CheckboxList from './components/CheckboxList';
import Footer from './components/Footer';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { ProgressBar } from './components/ProgressBar';
import { ajax } from 'rxjs/ajax';
import { delay } from 'rxjs/operators';
import styled from 'styled-components';

const Heading = styled.h1`
	font-style: normal;
	font-weight: normal;
	font-size: 32px;
	line-height: 37px;
	color: #282828;
	padding: 0 30px;
`;

const ListWrapper = styled.div`
	background: #f5f5f5;
	padding: 10px 30px 0;
`;

class App extends React.Component {
	osComponentRef?: RefObject<OverlayScrollbarsComponent>;

	state = {
		companies: [],
		allChecked: false,
		loading: true,
	};

	componentDidMount() {
		const companies$ = ajax.getJSON(`http://localhost:3000/companies`).pipe(delay(2000));

		companies$.subscribe((companies: any[]) =>
			this.setState({
				companies: companies,
				loading: false,
			})
		);
	}

	handleSelectAllClick = value => {
		let companies = this.state.companies;

		companies.forEach(company => {
			let departments = company.departments;
			departments.forEach(d => (d.required = value));
		});

		this.setState({
			companies: companies,
			allChecked: value,
		});
	};

	handleSingleCheckboxClick = event => {
		let companies = this.state.companies;

		companies.forEach(company => {
			company.departments.forEach(d => {
				if (d.label === event.target.name) d.required = event.target.checked;
			});
		});

		if (event.target.checked === false) {
			this.setState({
				companies: companies,
				allChecked: false,
			});
		} else {
			companies.forEach(company => {
				company.departments.forEach(dep => {
					if (dep.required === true) {
						this.setState({
							companies: companies,
							allChecked: true,
						});
					}
				});
			});
		}
	};

	render() {
		const companiesList = this.state.companies.map((item: any) => {
			return <CheckboxList key={item.id} name={item.name} items={item.departments} onChange={this.handleSingleCheckboxClick} />;
		});

		return (
			<>
				<Heading>
					Hey, take a moment to <b>adjust your privacy settings</b>
				</Heading>
				{this.state.loading ? (
					<ProgressBar />
				) : (
					<>
						<OverlayScrollbarsComponent ref={this.osComponentRef}>
							<ListWrapper>{companiesList}</ListWrapper>
						</OverlayScrollbarsComponent>
						<Footer allChecked={this.state.allChecked} onClick={this.handleSelectAllClick} />
					</>
				)}
			</>
		);
	}
}

export default App;
