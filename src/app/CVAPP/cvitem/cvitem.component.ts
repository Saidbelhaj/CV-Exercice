import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../../Model/Personne";

@Component({
  selector: 'app-cvitem',
  templateUrl: './cvitem.component.html',
  styleUrls: ['./cvitem.component.css']
})
export class CvitemComponent implements OnInit {
@Input() personne: Personne;
@Output() selectedPersonne= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectPersonne(){
    this.selectedPersonne.emit(
      this.personne
    );
  }

}
