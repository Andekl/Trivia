import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { NavMenu } from './NavMenu';

interface IAddQuestionProps { }
interface IAddQuestionState {
	questionName: string;
}

export class AddQuestion extends React.Component<RouteComponentProps<{}>, {}> {
	constructor() {
		super();
		this.state = { }

		fetch('api/AddQuestions') // post question method??
			.then(response => { console.log('AddQuestions returned ', response); return response.json(); })
			.then(data => {
				this.setState({ questionName: data });
				console.log('AddQuestions json ', data)
			})
	}
	public render() {
		return <div>
			<p>You can add a new trivia question here!</p>
			<input type="text" placeholder="Add new question" /> <br />
			<input type="text" placeholder="Add option" /> <br />
			<input type="text" placeholder="Add option" /> <br />
			<input type="text" placeholder="Add option" /> <br />
			<button onClick={this.handleClick}> Submit question! </button>
		</div>;
	}
	public handleClick() {
		//function to handle click button
		//needs code to do it :)
	}
}