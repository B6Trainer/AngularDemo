import { Component, input, model, OnInit, output } from '@angular/core';
import { SongInterface } from '../data/SongInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-song',
  imports: [CommonModule],
  templateUrl: './song.html',
  styleUrl: './song.css',
})
export class Song implements OnInit {

  ngOnInit(): void {    
    this.fetchSongDetails();
  }

  fetchSongDetails() {
    // Simulate fetching additional details for the song
    //console.log("Fetching additional details for song:", this.song().title);
  }

  song = input.required<SongInterface>();

  isTopSong = model(false);

  voteUp = output<number>();

  clickVoteUp() {
    this.voteUp.emit(this.song().id);
  }

}
