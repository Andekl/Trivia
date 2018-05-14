import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { FetchData } from 'ClientApp/components/FetchData';
import { render } from 'react-dom';
import { ChangeEvent } from 'react';

let counter: number;
counter = 0;
let points: number;
points = 0;
interface IQuestionsProps { }
interface IQuestionsState {
	questions: Question[];
	hasFetchedData: boolean;
	counterstate: number;
	selectedOption: string;
}

export class Home extends React.Component<RouteComponentProps<{}>, IQuestionsState> {
	public constructor() {
		super();
		this.state = {
			questions: [],
			hasFetchedData: false,
			counterstate: 0,
			selectedOption: ''
		};
		this.submitAnswer = this.submitAnswer.bind(this);
		this.handleAnswer = this.handleAnswer.bind(this);

		fetch('api/Questions')
			.then(response => response.json() as Promise<Question[]>)
			.then(data => {
				this.setState({ questions: data, hasFetchedData: true })
			});
	}

	public render() {
		let contents = this.state.hasFetchedData
			? this.renderQuestionTable(this.state.questions, this.state.counterstate)
			: <p><em>Loading...</em></p>;

		return <div>
			<h1>Questions</h1>
			{contents}
		</div>
	}

	public renderQuestionTable(questions: Question[], counter1: number) {
		return <div>
			<h1>{counter1}</h1>
			<form>
				<table className='table'>
					<thead>
						<tr>
							<th>Question</th>
							<th>1</th>
							<th>2</th>
							<th>3</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{questions[counter1].questionName}</td>
							<td><input onChange={this.handleAnswer}
								type="radio"
								name="answer"
								checked={this.state.selectedOption === '1'}
								value="A" />{questions[counter1].correctOption}</td>
							<td><input onChange={this.handleAnswer}
								type="radio"
								name="answer"
								checked={this.state.selectedOption === '2'}
								value="B" />{questions[counter1].falseOption1}</td>
							<td><input onChange={this.handleAnswer}
								type="radio"
								name="answer"
								checked={this.state.selectedOption === '3'}
								value="C" />{questions[counter1].falseOption2}</td>
						</tr>
					</tbody>
				</table>
			</form>
			<button onClick={this.submitAnswer}>Submit</button>
		</div>;
	}

	handleAnswer(e: any) {
		this.setState({ selectedOption: e.target.value })
		//console.log(this.state.selectedOption)
	}

	public submitAnswer(event: any) {
		fetch('/api/Submit/' + this.state.selectedOption)
			.then(Response => {
				counter++;
				console.log(counter);
				console.log(this.state.selectedOption);
				console.log(Response);
				this.setState({ counterstate: counter });
			})
		//this.setState({ hasFetchedData: false });
	}
}

interface Question {
	questionName: string;
	correctOption: string;
	falseOption1: string;
	falseOption2: string;
}
