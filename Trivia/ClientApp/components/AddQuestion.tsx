import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { NavMenu } from './NavMenu';

interface IAddQuestionProps { }
interface IAddQuestionState {
    questionName: string;
    correctOption: string;
    OptionA: string;
    OptionB: string;
    OptionC: string;
}

export class AddQuestion extends React.Component<RouteComponentProps<IAddQuestionProps>, IAddQuestionState> {
    constructor() {
        super();
        this.state = {
            questionName: "",
            correctOption: "",
            OptionA: "",
            OptionB: "",
            OptionC: ""
        };

        this.handleChangeNewQuestion = this.handleChangeNewQuestion.bind(this);
        this.handleChangeOptionA = this.handleChangeOptionA.bind(this);
        this.handleChangeOptionB = this.handleChangeOptionB.bind(this);
        this.handleChangeOptionC = this.handleChangeOptionC.bind(this);
        this.handleChangeCorrectOption = this.handleChangeCorrectOption.bind(this);
        this.handleClick = this.handleClick.bind(this);

        fetch('api/Questions') // post question method??
            .then(response => { console.log('Questions returned ', response); return response.json(); })
            .then(data => {
                this.setState({ questionName: data });
                console.log('Questions json ', data)
            })
    }
    public render() {
        return <div>
            <h1>You can add a new trivia question here!</h1>
            <div className="form-group">
                <div className="addQuestion">

                    <label htmlFor="text">Question: </label>
                    <input type="text" placeholder="Add new question"
                        value={this.state.questionName}
                        onChange={this.handleChangeNewQuestion} /> <br />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="OptionA">Option A: </label>
                <input type="text" placeholder="Add option" className="form-control" id="OptionA"
                    value={this.state.OptionA}
                    onChange={this.handleChangeOptionA} /> <br />
            </div>

            <div className="form-group">
                <label htmlFor="OptionB">Option B: </label>
                <input type="text" placeholder="Add option" className="form-control" id="OptionB"
                    value={this.state.OptionB}
                    onChange={this.handleChangeOptionB} /> <br />
            </div>

            <div className="form-group">
                <label htmlFor="OptionC">Option C: </label>
                <input type="text" placeholder="Add option" className="form-control" id="OptionC"
                    value={this.state.OptionC}
                    onChange={this.handleChangeOptionC} /> <br />
            </div>

            <div className="form-group">
                <label htmlFor="CorrectOption"> Correct Option: </label>
                <input type="text" className="form-control" id="CorrectOption"
                    value={this.state.correctOption}
                    onChange={this.handleChangeCorrectOption}
                    placeholder="A, B or C" />
            </div>


            <button className="btn btn-default" onClick={this.handleClick}> Submit question! </button>
        </div>;
    }

    handleChangeNewQuestion(event: any) {
        this.setState({ questionName: event.target.value });
    }
    handleChangeOptionA(event: any) {
        this.setState({ OptionA: event.target.value });
    }
    handleChangeOptionB(event: any) {
        this.setState({ OptionB: event.target.value });
    }
    handleChangeOptionC(event: any) {
        this.setState({ OptionC: event.target.value });
    }
    handleChangeCorrectOption(event: any) {
        this.setState({ correctOption: event.target.value });
    }



    handleClick(event: any) {
        fetch('api/Questions/NewQuestion?questionName=' + this.state.questionName + '&optionA=' + this.state.OptionA + '&optionB=' + this.state.OptionB + '&optionC=' + this.state.OptionC + '&correctOption=' + this.state.correctOption)
            .then(Response => {
                console.log(Response);
                console.log("******console after response*****");
            })
    }
}