import { Component, viewChild, viewChildren } from '@angular/core';
import { Song } from '../song/song';
import { SongInterface } from '../data/SongInterface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-song-list',
  imports: [Song,CommonModule],
  templateUrl: './songlist.html',
  styleUrl: './songlist.css',  
  
})


export class SongList {

    latestlist : boolean = false;

    toggleSongList() {
      this.latestlist = this.latestlist === false ? true : false;      
    }

    song1 : SongInterface = {
      id: 1, title: "Billie Jean", artist: "Michael Jackson", dateReleased: new Date(1983, 1, 2), price: 10.99,
      votes: 0
    };

    song2 : SongInterface = {
      id: 2, title: "I don't wanna miss a thing", artist: "Aerosmith", dateReleased: new Date(1998, 5, 2), price: 9.99,
      votes: 0
    };

    song3 : SongInterface = {
      id: 3, title: "My heart will go on", artist: "Celine Dion", dateReleased: new Date(1997, 11, 19), price: 7.99,
      votes: 0
    };


    vote(id :number) : void {
      if (id == 1) {
        this.song1.votes += 1;
      } else if (id == 2) {
        this.song2.votes += 1;
      } else if (id == 3) {
        this.song3.votes += 1;
      }

      const maxVotes = Math.max(this.song1.votes, this.song2.votes, this.song3.votes);

      this.songComponent1().isTopSong.set(this.song1.votes === maxVotes);
      this.songComponent2().isTopSong.set(this.song2.votes === maxVotes);
      this.songComponent3().isTopSong.set(this.song3.votes === maxVotes);

    }

    songComponent1 = viewChild.required<Song>("songComponent1");
    songComponent2 = viewChild.required<Song>("songComponent2");
    songComponent3 = viewChild.required<Song>("songComponent3");


    songs : SongInterface[]  = [
      {id: 4, title:"Billie Jean 2", artist: "Michael Jackson", dateReleased: new Date(1983,1,2), price: 10.99, votes:0},
      {id: 5, title:"I don't wanna miss a thing 2", artist: "Aerosmith", dateReleased: new Date(1998,5,2), price: 9.99, votes:0},
      {id: 6, title:"My heart will go on 2", artist: "Celine Dion", dateReleased: new Date(1997,11,19), price: 7.99, votes:0}
    ];

    songComponents= viewChildren<Song>("songcomponents");


    votenew(id :number) : void {
      this.songs.find(song => song.id === id)!.votes += 1;

      const maxVotes = Math.max(...this.songs.map(song => song.votes));

      this.songComponents().forEach(songComp => songComp.isTopSong.set(maxVotes === songComp.song().votes));

    }

    ulStyle = {
      'list-style-type': 'none',
      padding: '10px',
      color: 'green',
      
    };

    liStyle = {
      margin: '20px 0',      
    };

}
