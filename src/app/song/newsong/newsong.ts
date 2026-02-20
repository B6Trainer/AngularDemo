import { Component, inject, input } from '@angular/core';
import { SongDataService } from '../data/songdataservice';
import { SongInterface } from '../data/SongInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-song',
  imports: [CommonModule],
  templateUrl: './newsong.html',
  styleUrl: './newsong.css',
})
export class Newsong {

  private dataService = inject(SongDataService);

  song = input.required<SongInterface>();
  isTopSong : boolean = false;

    ngOnInit() {
    this.isTopSong = this.dataService.isTopSong(this.song().id);
    this.dataService.votesHaveChanged.subscribe(() => {
      this.isTopSong = this.dataService.isTopSong(this.song().id);
    }); 
  }

  clickVoteUp() {
    this.dataService.recordVote(this.song().id);
  }
  

}
