import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "./module/common/menu/menu";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true,
})
export class App implements OnInit {
  protected readonly title = signal('Practice App');

  mode = 'light-mode';

  switchMode() {
    this.mode = this.mode === 'light-mode' ? 'dark-mode' : 'light-mode';
    localStorage.setItem('mode', this.mode);
  }

  platformId = inject(PLATFORM_ID);
  ngOnInit() {
    
    if (isPlatformBrowser(this.platformId)) {      
      const savedMode = localStorage.getItem('mode');
      if (savedMode) {
        this.mode = savedMode;
      }
    }
  }

}