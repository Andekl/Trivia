import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';
import { NavMenu } from './NavMenu';

interface IAddQuestionProps { }
interface IAddQuestionState {
    questionName: string;
    correctAnswer: string;
    falseOption1: string;
    falseOption2: string;
}

export class AddQuestion extends React.Component<RouteComponentProps<IAddQuestionProps>, IAddQuestionState> {
    constructor() {
        super();
        this.state = {
            questionName: "",
            correctAnswer: "",
            falseOption1: "",
            falseOption2: ""
        };

        this.handleChangeNewQuestion = this.handleChangeNewQuestion.bind(this);
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
            <div className="addQuestion">
                <p>You can add a new trivia question here!</p>
                <input type="text" placeholder="Add new question"
                    value={this.state.questionName}
                    onChange={this.handleChangeNewQuestion} /> <br />
            </div>



            <input type="text" placeholder="Add option" /> <br />
            <input type="text" placeholder="Add option" /> <br />
            <input type="text" placeholder="Add option" /> <br />
            <button onClick={this.handleClick}> Submit question! </button>
        </div>;
    }

    handleChangeNewQuestion(event: any) {
        this.setState({ questionName: event.target.value });
    }
    public handleClick() {
        //function to handle click button
        //needs code to do it :)
    }
}