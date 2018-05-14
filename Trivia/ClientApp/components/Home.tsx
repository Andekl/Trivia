import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { FetchData } from 'ClientApp/components/FetchData';
import { render } from 'react-dom';
import { ChangeEvent } from 'react';

//let counter: number;
//counter = 0;
//let points: number;
//points = 0;
//interface IQuestionsProps { }
//interface IQuestionsState {
//	questions: Question[];
//	hasFetchedData: boolean;
//	counterstate: number;
//	selectedOption: string;
//}

//export class Home extends React.Component<RouteComponentProps<{}>, IQuestionsState> {
//	public constructor() {
//		super();
//		this.state = {
//			questions: [],
//			hasFetchedData: false,
//			counterstate: 0,
//			selectedOption: ''
//		};
//		this.submitAnswer = this.submitAnswer.bind(this);
//		this.handleAnswer = this.handleAnswer.bind(this);

//		fetch('api/Questions')
//			.then(response => response.json() as Promise<Question[]>)
//			.then(data => {
//				this.setState({ questions: data, hasFetchedData: true })
//			});
//	}

//	public render() {
//		let contents = this.state.hasFetchedData
//			? this.renderQuestionTable(this.state.questions, this.state.counterstate)
//			: <p><em>Loading...</em></p>;

//		return <div>
//			<h1>Questions</h1>
//			{contents}
//		</div>
//	}

//	public renderQuestionTable(questions: Question[], counter1: number) {
//		return <div>
//			<h1>{counter1}</h1>
//			<form>
//				<table className='table'>
//					<thead>
//						<tr>
//							<th>Question</th>
//							<th>A</th>
//							<th>B</th>
//							<th>C</th>
//						</tr>
//					</thead>
//					<tbody>
//						<tr>
//							<td>{questions[counter1].questionName}</td>
//							<td><input onChange={this.handleAnswer}
//								type="radio"
//								name="answer"
//								checked={this.state.selectedOption === 'A'}
//								value="A" />{questions[counter1].correctOption}</td>
//							<td><input onChange={this.handleAnswer}
//								type="radio"
//								name="answer"
//								checked={this.state.selectedOption === 'B'}
//								value="B" />{questions[counter1].falseOption1}</td>
//							<td><input onChange={this.handleAnswer}
//								type="radio"
//								name="answer"
//								checked={this.state.selectedOption === 'C'}
//								value="C" />{questions[counter1].falseOption2}</td>
//						</tr>
//					</tbody>
//				</table>
//			</form>
//			<button onClick={this.submitAnswer}>Submit</button>
//		</div>;
//	}

//	handleAnswer(e: any) {
//		this.setState({ selectedOption: e.target.value })
//		//console.log(this.state.selectedOption)
//	}

//	public submitAnswer(event: any) {
//		fetch('/api/Submit' + this.state.selectedOption)
//			.then(Response => {
//				counter++;
//				console.log(counter);
//				console.log(this.state.selectedOption);
//				console.log(Response);
//				this.setState({ counterstate: counter });
//			})
//		//this.setState({ hasFetchedData: false });
//	}
//}

//interface Question {
//	questionName: string;
//	correctOption: string;
//	falseOption1: string;
//	falseOption2: string;
//}

let counter: number;
counter = 0;
let points: number;
points = 0;
let id = document.getElementById('react-app')!.textContent;
interface IQuestionsProps { }
interface IQuestionsState {
	questions: Question[];
	hasFetchedData: boolean;
	counterState: number;
	selectedOption: string;
	correctAnswer: string;
	pointsState: number;
	result: string;
	resultClassName: string;
	submitButtonHidden: boolean;
	submitButtonClassName: string;
	nextButtonHidden: boolean;
	nextButtonClassName: string;
}

export class Home extends React.Component<RouteComponentProps<{}>, IQuestionsState> {
	public constructor() {
		super();
		this.state = {
			questions: [],
			hasFetchedData: false,
			counterState: 0,
			selectedOption: '',
			correctAnswer: 'temp',
			pointsState: 0,
			result: '',
			resultClassName: '',
			submitButtonHidden: false,
			submitButtonClassName: 'btn btn-default',
			nextButtonHidden: true,
			nextButtonClassName: 'btn btn-default hidden'

		};
		this.submitAnswer = this.submitAnswer.bind(this);
		this.handleAnswer = this.handleAnswer.bind(this);
		this.restart = this.restart.bind(this);
		this.nextQuestion = this.nextQuestion.bind(this);

		console.log(id);

		fetch('api/Questions')
			.then(response => response.json() as Promise<Question[]>)
			.then(data => {
				this.setState({ questions: data, hasFetchedData: true })
			});
	}

	public render() {
		let contents = this.state.hasFetchedData
			? this.renderQuestionTable(this.state.questions, this.state.counterState)
			: <p><em>Loading...</em></p>;

		return <div>
			<div className="page-header"><h1>Questions</h1></div>
			{contents}
		</div>
	}

	public renderQuestionTable(questions: Question[], counter1: number) {
		if (counter < questions.length) {
			return <div>
				<div className="progress">
					<div id="progressbar" className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
						<span className="sr-only">70% Complete</span>
					</div>
				</div>
				<ul className="list-group">
					<div><h3>{questions[counter1].questionName}</h3></div>
					<label className="list-group-item">
						<input onChange={this.handleAnswer}
							id='answerA'
							type="radio"
							name="answer"
							checked={this.state.selectedOption === 'A'}
							value="A" /> {questions[counter1].option1}</label>
					<label className="list-group-item list-group-item-primary">
						<input onChange={this.handleAnswer}
							id='answerB'
							type="radio"
							name="answer"
							checked={this.state.selectedOption === 'B'}
							value="B" /> {questions[counter1].option2}</label>
					<label className="list-group-item list-group-item-primary">
						<input onChange={this.handleAnswer}
							id='answerC'
							type="radio"
							name="answer"
							checked={this.state.selectedOption === 'C'}
							value="C" /> {questions[counter1].option3}</label>
				</ul>

				<button className={this.state.submitButtonClassName} hidden={this.state.submitButtonHidden} onClick={this.submitAnswer}>Submit answer</button>
				<button className={this.state.nextButtonClassName} hidden={this.state.nextButtonHidden} onClick={this.nextQuestion}>Next Question</button>
				<div style={{ minHeight: '20px' }}> </div>
				<div className={this.state.resultClassName}>{this.state.result}</div>

			</div>;
		}
		else {
			console.log('no more questions');
			this.submitScore();
			return <div>
				<p> Your highscore is {this.state.pointsState} </p>
				<button className="btn btn-default" onClick={this.restart}>Restart</button>
			</div>;
		}
	}

	handleAnswer(e: any) {
		this.setState({ selectedOption: e.target.value })
	}

	restart() {
		points = 0;
		counter = 0;
		this.setState({ counterState: counter, pointsState: points });
	}

	nextQuestion() {
		counter++;
		this.setState({ result: '' });
		this.setState({ resultClassName: '' });
		this.setState({ counterState: counter });
		this.setState({ submitButtonHidden: false });
		this.setState({ submitButtonClassName: 'btn btn-default' });
		this.setState({ nextButtonHidden: true });
		this.setState({ nextButtonClassName: 'btn btn-default hidden' });
		document.getElementById('progressbar')!.style.width = counter / this.state.questions.length * 100 + '%';
		this.setState({ selectedOption: '' });
	}

	public submitAnswer(event: any) {
		console.log(counter);
		console.log(this.state.selectedOption);
		if (this.state.questions[counter].correctOption === this.state.selectedOption) {
			points++;
			this.setState({ pointsState: points })
			console.log('correct');
			this.setState({ result: 'Correct!' });
			this.setState({ resultClassName: 'alert alert-success' });
		}
		else {
			this.setState({ result: 'Wrong!' });
			this.setState({ resultClassName: 'alert alert-danger' });
			console.log('wrong');
		}
		this.setState({ submitButtonClassName: 'btn btn-default hidden' });
		this.setState({ nextButtonClassName: 'btn btn-default' });
	}

	submitScore() {
		fetch('api/Questions/SubmitScore?points=' + this.state.pointsState + '&id=' + id)
			.then(Response =>
				console.log('fetch status: ', Response.status));
	}
}

interface Question {
	questionName: string;
	correctOption: string;
	option1: string;
	option2: string;
	option3: string;
}
