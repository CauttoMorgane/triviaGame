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

    constructor(public questionsService: QuestionsService) {
    }

    ngOnInit() {
        this.questions = this.questionsService.getQuestions();
        this.questionsService.loadQuestions();
    }

}
