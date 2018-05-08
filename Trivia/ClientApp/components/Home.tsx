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
	componentDidMount() {
		//fråga API:et efter aktuell data
		fetch('/api/GetQuestion')
			.then(data => {
				console.log('GetQuestion returned ', data);
				return data.json();
			})
			.then(json => {
				this.setState({ //state uppdateras,sen säger den till komponenten att den har uppdateras 
					//och att den måste renderas igen
					questionName: json.questionName
				});
				console.log('GetQuestion json ', json)
			})
	}
}
