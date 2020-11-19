import { Component, OnInit } from '@angular/core';
import { PersonModel } from 'src/app/shared/models/person.model';
import { TorreService } from 'src/app/services/torre.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

  peopleList: PersonModel[] = [];
  isLoading: boolean;

  constructor(private torreService: TorreService) { }

  ngOnInit() {}

  searchChange($event){
    let text = $event.detail.value;
    if(text){
      this.isLoading = true;
      this.torreService.searchPeople(text).subscribe(res =>{
        this.peopleList = res;
        this.isLoading = false;
      }, () =>{
        this.isLoading = false;
      });
    }else{
      this.peopleList = [];
    }
  }

}
