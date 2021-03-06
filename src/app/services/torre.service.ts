import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonModel } from '../shared/models/person.model';
import { map } from 'rxjs/operators';
import { JobModel } from '../shared/models/job.model';
import { GenomaModel } from '../shared/models/genoma.mode';
import { JobDetailModel } from '../shared/models/job-detail.model';

@Injectable({
  providedIn: 'root'
})
export class TorreService {

  private searchTorreURL = "https://search.torre.co";
  private queryString = "size=20&aggregate=false&offset=0";

  constructor(private httpClient: HttpClient) { }

  getBio(userName: string){
    return this.httpClient.get<GenomaModel>(`/apibio/bios/${userName}`);
  }

  getJob(jobId: string){
    return this.httpClient.get<JobDetailModel>(`https://torre.co/api/opportunities/${jobId}`);
  }

  searchPeople(name: string){
    return this.httpClient.post<PersonModel[]>(`${this.searchTorreURL}/people/_search/?${this.queryString}`, {"name":{"term":name}})
      .pipe(map(x => x["results"]));
  }

  searchJobs(description: string){
    return this.httpClient.post<JobModel[]>(`${this.searchTorreURL}/opportunities/_search/?${this.queryString}`, {"skill/role":{"text":description,"experience":"potential-to-develop"}})
      .pipe(map(x => x["results"]));
  }
}
