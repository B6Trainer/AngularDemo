import { EventEmitter, Injectable, Output } from '@angular/core';
import { SongInterface } from './SongInterface';



@Injectable({
  providedIn: 'root'
})
export class SongDataService {

  constructor() { }

    private songs : SongInterface[]  = [
      {id: 1, title:"Bad", artist: "Michael Jackson", dateReleased: new Date(1983,1,2), price: 10.99, votes:0},
      {id: 2, title:"Jai Ho", artist: "AR Rahman", dateReleased: new Date(1998,5,2), price: 9.99, votes:0},
      {id: 3, title:"Baby One More Time", artist: "Britney Spears", dateReleased: new Date(1997,11,19), price: 7.99, votes:0}
    ];

    @Output() votesHaveChanged = new EventEmitter<void>();

    getSongs() : SongInterface[] {
      return this.songs;
    }

    recordVote(id :number) : void {
      this.songs.find(song => song.id === id)!.votes += 1;
      this.votesHaveChanged.emit();
    }

    isTopSong(id: number) : boolean {
      const maxVotes = Math.max(...this.songs.map(song => song.votes));
      if (maxVotes === 0) {
        return false;
      }
      return this.songs.find(song => song.id === id)!.votes === maxVotes;
    }

}
