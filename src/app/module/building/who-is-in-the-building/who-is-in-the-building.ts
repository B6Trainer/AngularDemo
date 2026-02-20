import { Component, inject, OnInit, signal } from '@angular/core';
import { RestService } from '../../service/RestService';
import { AccessRecord } from '../data/AccessRecord';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-who-is-in-the-building',
  imports: [],
  templateUrl: './who-is-in-the-building.html',
  styleUrl: './who-is-in-the-building.css',
})

export class WhoIsInTheBuildingComponent implements OnInit {

  private restService = inject(RestService);

  accessLogs = signal<AccessRecord[]>([]);
  selectedBuilding = '';

  // ngOnInit(): void {
  //  this.restService.getAccessLogs(new Date()).subscribe(data => {
  //     // console.log("Access Logs:", data);
  //     const buildingRecords = data.filter(record => record.building.name === this.selectedBuilding );
         
  //     const lastRecordsMap = new Map<number, AccessRecord>();
  //     buildingRecords.forEach(record => {
  //       lastRecordsMap.set(record.user.id, record);
  //     });
  //     const lastRecords = Array.from(lastRecordsMap.values());
         
  //     const insideRecords = lastRecords.filter(record => record.status === true);
  //     this.accessLogs.set(insideRecords);
  //     console.log("Filtered Logs:", insideRecords);
  //   });
  // }

    
    private route = inject(ActivatedRoute);

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.selectedBuilding = params['building'] || "Adel Square";
        console.log(params);
        if (this.selectedBuilding !== "") this.getData();
      }); 
    }

    getData() {
      this.restService.getAccessLogs(new Date()).subscribe(data => {
        const buildingRecords = data.filter(record => record.building.name === this.selectedBuilding );
        const lastRecordsMap = new Map<number, AccessRecord>();
        buildingRecords.forEach(record => {
          lastRecordsMap.set(record.user.id, record);
        });
        const lastRecords = Array.from(lastRecordsMap.values());
        const insideRecords = lastRecords.filter(record => record.status === true);
        this.accessLogs.set(insideRecords);

      });
    }

}  