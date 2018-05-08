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
		//fr�ga API:et efter aktuell data
		fetch('/api/GetQuestion')
			.then(data => {
				console.log('GetQuestion returned ', data);
				return data.json();
			})
			.then(json => {
				this.setState({ //state uppdateras,sen s�ger den till komponenten att den har uppdateras 
					//och att den m�ste renderas igen
					questionName: json.questionName
				});
				console.log('GetQuestion json ', json)
			})
	}
}
