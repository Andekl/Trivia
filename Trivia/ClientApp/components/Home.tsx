import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IHomeProps { }
interface IHomeState {
	questionName: string;
}

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
	constructor() {
		super();
		this.state = {}

		fetch('api/AddQuestions') //change api method to get 1 question??
			.then(response => { console.log('AddQuestions returned ', response); return response.json(); })
			.then(data => {
				this.setState({ questionName: data });
				console.log('AddQuestions json ', data)
			})
	}

	public render() {
		return <div>
			<h1>Start a new quiz here!</h1>
		</div>;
	}
}
