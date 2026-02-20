import { Component, inject } from '@angular/core';
import { SongDataService } from '../data/songdataservice';
import { Newsong } from '../newsong/newsong';
import { CommonModule } from '@angular/common';
import { SongInterface } from '../data/SongInterface';

@Component({
  selector: 'app-modern-songlist',
  imports: [CommonModule, Newsong],
  templateUrl: './modernsonglist.html',
  styleUrl: './modernsonglist.css',
})
export class ModernSonglist {

    public songDataService = inject(SongDataService);

    songs: SongInterface[]= this.songDataService.getSongs();

    ulStyle = {
      'list-style-type': 'none',
      padding: '0'
    };

    liStyle = {
      margin: '20px 0',      
    };

}
