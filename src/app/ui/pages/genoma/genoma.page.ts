import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TorreService } from 'src/app/services/torre.service';
import { GenomaModel } from 'src/app/shared/models/genoma.mode';

@Component({
  selector: 'app-genoma',
  templateUrl: './genoma.page.html',
  styleUrls: ['./genoma.page.scss'],
})
export class GenomaPage implements OnInit {

  genoma: GenomaModel;

  constructor(private actRoute: ActivatedRoute, private torreService: TorreService) { }

  ngOnInit() {
    const params = this.actRoute.snapshot.params;
    if(params && params.username){
      this.torreService.getBio(params.username).subscribe(res =>{
        this.genoma = res;
      });
    }
  }

}
