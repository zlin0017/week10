import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-listactor',
  templateUrl: './listactor.component.html',
  styleUrls: ['./listactor.component.css']
})
export class ListactorComponent implements OnInit {
  actorsDB: any[] = [];
  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.getActors();
  }

  getActors(){
    this.db.getActors().subscribe((data:any[]) => {
      this.actorsDB = data;
    });
  }

}
