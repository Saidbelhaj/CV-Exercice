import { Component, OnInit } from '@angular/core';

import {Personne} from "../../Model/Personne";




@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Personne [];
  selectedPersonne: Personne;
  constructor() { }

  ngOnInit() {
    this.personnes= [
      new Personne(1, 'Belhaj', 'Said', 32, '1.jpg', 1234, 'Consultant'),
      new Personne(2, 'Zidane', 'Zinédine', 50, '2.jpg', 12345, 'Footballeur'),
      new Personne(3, 'Ronaldo ', 'Cristiano', 38, '3.jpg', 123456, 'Footballeur'),
  ];
  }
  selectPersonne (personne){
    this.selectedPersonne=personne;
  }

}
