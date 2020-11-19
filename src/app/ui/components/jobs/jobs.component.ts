import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TorreService } from 'src/app/services/torre.service';
import { JobModel } from 'src/app/shared/models/job.model';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {

  jobsList: JobModel[] = [];
  isLoading: boolean;

  constructor(private router: Router, private torreService: TorreService) { }

  ngOnInit() {
   
  }

  goToJob(id: string){
    this.router.navigate([`/job/${id}`]);
  }

  searchChange($event){
    let text = $event.detail.value;
    if(text){
      this.isLoading = true;
      this.torreService.searchJobs(text).subscribe(res =>{
        this.jobsList = res;
        this.isLoading = false;
      }, () =>{
        this.isLoading = false;
      });
    }else{
      this.jobsList = [];
    }
  }

}
