import {Injectable} from '@angular/core';
import Question from './question.interface';
import {HttpService} from '../shared/http.service';

@Injectable({
    providedIn: 'root'
})
export class QuestionsService {
    public questions: Question[] = [];

    constructor(public httpService: HttpService) {
    }

    getQuestions(): Question[] {
        return this.questions;
    }

    loadQuestions(): any {
        return this.httpService
            .get('https://opentdb.com/api.php?amount=5&difficulty=easy');
    }
}
