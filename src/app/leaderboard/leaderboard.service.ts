import {Injectable} from '@angular/core';
import Score from './leaderboard.interface';
import {HttpService} from '../shared/http.service';

@Injectable({
    providedIn: 'root'
})
export class LeaderboardService {
    public scores: Score[] = [];

    constructor(public httpService: HttpService) {
    }

    getScores(): Score[] {
        return this.scores;
    }

    loadScores(): any {
        return this.httpService
            .get('https://leaderboard.lp1.eu/api/json');
    }
}
