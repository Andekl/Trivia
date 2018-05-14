import { RouteComponentProps } from 'react-router';
import * as React from 'react';
import { FetchData } from 'ClientApp/components/FetchData';
import { render } from 'react-dom';
import { ChangeEvent } from 'react';

let counter: number;
counter = 0;
let score: number;
score = 0;
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
		score = 0;
		counter = 0;
		this.setState({ counterState: counter, pointsState: score });
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
			score++;
			this.setState({ pointsState: score })
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
		fetch('api/Questions/SubmitScore?id=' + this.state.pointsState)
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
