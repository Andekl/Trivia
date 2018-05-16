import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface Highscores {
	score: number;
	id: number;
	date: Date;
}

interface IHighscoreProps { }
interface IHighscoreState {
	scores: Highscores[];
}

export class Highscore extends React.Component<RouteComponentProps<{}>, IHighscoreState> {
	constructor() {
		super();
		this.state = { scores: [] }
		fetch('/api/Highscores')
			.then(response => { console.log('Highscores returned ', response); return response.json(); })
			.then(data => {
				this.setState({ scores: data });
			})
	}
	public render() {
		const list = this.state.scores.map(scores => (
			<tr>
				<td> {scores.score} </td>
				<td> {scores.id} </td>
				<td> {scores.date} </td>
			</tr>
		));
		return <div>
			<h1>See all highscore here!</h1>

			<table className='table'>
				<thead>
					<tr>
						<th>Score</th>
						<th>Player</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody> {list} </tbody>
			</table>
		</div >;
	}
}

