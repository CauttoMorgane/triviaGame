import {Component, OnInit} from '@angular/core';
import Score from './leaderboard.interface';
import {LeaderboardService} from './leaderboard.service';

@Component({
    selector: 'app-leaderboard',
    templateUrl: './leaderboard.page.html',
    styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {
    scores: Score[] = [];


    constructor(public leaderboardService: LeaderboardService) {
    }

    ngOnInit() {
        this.scores = this.leaderboardService.scores;
        this.leaderboardService.loadScores().subscribe((response) => {
                this.scores = response.results;
                console.log(this.scores);
                console.log(response);
            }, (error) => {
                console.error(error);
            }
        );
    }
}
