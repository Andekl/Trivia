import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface Question {
	questionName: string;
	correctOption: string;
	wrongOption1: string;
	wrongOption2: string;
}

interface IHomeProps { }
interface IHomeState {
	questions: Question[];
}

export class Home extends React.Component<RouteComponentProps<{}>, IHomeState> {
	constructor() {
		super();
		this.state = { questions: [] }

		fetch('api/AddQuestions') //change api method to get 1 question??
			.then(response => { console.log('AddQuestions returned ', response); return response.json(); })
			.then(data => {
				this.setState({ questions: data });
				console.log('AddQuestions json ', data)
			})
	}

	public render() {
		return <div>
			<h1>Start a new quiz here!</h1>
		</div>;
	}
}
