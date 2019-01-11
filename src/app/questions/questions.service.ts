import {Injectable} from '@angular/core';

import Question from './question.interface';
import {HttpService} from '../shared/http.service';


@Injectable({
    providedIn: 'root'
})
export class QuestionsService {
    private questions: Question[] = [];

    constructor(public httpService: HttpService) {
    }

    getQuestions(): Question[] {
        return this.questions;
    }

    loadQuestions() {
        this.httpService
            .get('https://opentdb.com/api.php?amount=5&difficulty=easy')
            .subscribe((response) => {
                    console.log(response);
                }, (error) => {
                    console.error(error);
                }
            );
    }
}
