import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorreService } from 'src/app/services/torre.service';
import { JobDetailModel } from 'src/app/shared/models/job-detail.model';
import { ArrayUtil } from 'src/app/shared/utils/array.util';

@Component({
  selector: 'app-job',
  templateUrl: './job.page.html',
  styleUrls: ['./job.page.scss'],
})
export class JobPage implements OnInit {

  jobDetail: JobDetailModel;

  location: string[];
  details: any;
  detailsKeys: string[];

  constructor(private actRoute: ActivatedRoute, private torreService: TorreService) { }

  ngOnInit() {
    const params = this.actRoute.snapshot.params;
    if(params && params.id){
      this.torreService.getJob(params.id).subscribe(res =>{
        this.jobDetail = res;

        this.location = this.jobDetail.place.location.map(x => x["id"]);
        this.details = ArrayUtil.groupBy(this.jobDetail.details, "code");
        this.detailsKeys = Object.keys(this.details);
      });
    }
  }

}
