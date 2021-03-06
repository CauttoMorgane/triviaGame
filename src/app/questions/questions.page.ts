import {Component, OnInit} from '@angular/core';
import Question from './question.interface';
import {QuestionsService} from './questions.service';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.page.html',
    styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
    questions: Question[] = [];
    score = 0;

    constructor(public questionsService: QuestionsService) {
    }

    ngOnInit() {
        this.questions = this.questionsService.questions;
        this.questionsService.loadQuestions().subscribe((response) => {
                this.questions = response.results;
                console.log(this.questions);
                console.log(response);
            }, (error) => {
                console.error(error);
            }
        );
    }

    goodAnswer(question) {
        question.done = true;
        this.score = this.score + 5;
    }

    badAnswer(question) {
        question.done = true;
        this.score = this.score - 5;
    }

}
