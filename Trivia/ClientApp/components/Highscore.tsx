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
		this.state = { score: 0, userId: 0 }
	}
	public render() {
		return <div>
			<p>See highscore here!</p>
		</div>;
	}

	componentDidMount() {
		//fråga API:et efter aktuell data
		fetch('/api/GetHighscore')
			.then(data => {
				console.log('GetHighscore returned ', data);
				return data.json();
			})
			.then(json => {
				this.setState({ //state uppdateras,sen säger den till komponenten att den har uppdateras 
					//och att den måste renderas igen
					score: json.score,
					userId: json.userId
				});
				console.log('GetHighscore jason ', json)
			})
	}
}
