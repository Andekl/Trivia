import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface IHighscoreProps { }
interface IHighscoreState {
	score: number;
	userId: number;
}

export class Highscore extends React.Component<RouteComponentProps<{}>, IHighscoreState> {
	constructor() {
		super();
		this.state = { score: 0, userId: 1 }

		fetch('/api/Highscores')
			.then(response => { console.log('Highscores returned ', response); return response.json(); })
			.then(data => {
				this.setState({ score: data.score, userId: data.userId });
				console.log('Highscores json ', data)
			})
	}
	public render() {
		return <div>
			<p>See highscore here!</p>
			{this.state.score}
			{this.state.userId}
		</div>;
	}
}
