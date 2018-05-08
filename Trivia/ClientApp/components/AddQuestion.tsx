import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { NavMenu } from './NavMenu';

interface IAddQuestionProps { }
interface IAddQuestionState { }

export class AddQuestion extends React.Component<RouteComponentProps<{}>, {}> {
	public render() {
		return <div>
			<p>You can add a new trivia question here!</p>
			<input type="text" placeholder="Add new question" /> <br />
			<input type="text" placeholder="Add option" /> <br />
			<input type="text" placeholder="Add option" /> <br />
			<input type="text" placeholder="Add option" /> <br />
		</div>;
	}
}