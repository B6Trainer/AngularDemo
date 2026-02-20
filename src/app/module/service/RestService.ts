import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Building } from "../building/data/Building";
import { AccessRecord } from "../building/data/AccessRecord";
import { environment } from "../../../environments/environment";

  



@Injectable({
  providedIn: 'root'
})

export class RestService {

  private httpClient = inject(HttpClient);
  serverUrl = environment.serverUrl;

  getBuildings() : Observable<Building[]> {
    return this.httpClient.get<Building[]>(`${this.serverUrl}/api/building`);
  }

  getAccessLogs(date: Date) : Observable<AccessRecord[]> {
    const formattedDate = date.toISOString().split('T')[0]; // Format date as yyyy-MM-dd
    return this.httpClient.get<AccessRecord[]>(`${this.serverUrl}/api/logs/${formattedDate}?all=true`);
  }

  addUser(user: {firstname: string, surname: string}) : Observable<{id: number, firstname: string, surname: string}> {
    return this.httpClient.post<{id: number, firstname: string, surname: string}>(`${this.serverUrl}/api/user`, user);
  }

}