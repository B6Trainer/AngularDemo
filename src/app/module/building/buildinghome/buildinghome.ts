import { Component, inject, OnInit, signal } from '@angular/core';

import { RestService } from '../../service/RestService';
import { Building } from '../data/Building';
import { Router } from '@angular/router';


@Component({
  selector: 'app-building-home',
  imports: [],
  templateUrl: './buildinghome.html',
  styleUrl: './buildinghome.css',
})
export class Buildinghome implements OnInit {

  buildings = signal<Building[]>([]);

  private restService = inject(RestService);

  ngOnInit(): void {
    this.restService.getBuildings().subscribe(buildings => {
      console.log('Buildings fetched on app init:', buildings);
      this.buildings.set(buildings);
    });
  }

  private router = inject(Router);

  handleChange(event: any) {
    const building = event.target.value;
    this.router.navigate(['whois', building]);
  }

}
