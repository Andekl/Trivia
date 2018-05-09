import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IHomeProps { }
interface IHomeState {
	questionName: string;
}

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
	public render() {
		return <div>
			<h1>Start a new quiz here!</h1>
		</div>;
	}
}
