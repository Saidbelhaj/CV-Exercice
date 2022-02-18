import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Personne} from "../../Model/Personne";

@Component({
  selector: 'app-cvliste',
  templateUrl: './cvliste.component.html',
  styleUrls: ['./cvliste.component.css']
})
export class CvlisteComponent implements OnInit {
  @Input() personnes : Personne[];
  @Output() selectedPersonne = new EventEmitter ();
  constructor() { }

  ngOnInit(): void {
  }
selectPersonne(selectedPersonne){
   // console.log(selectedPersonne);
  this.selectedPersonne.emit(
    selectedPersonne
  );
}

}
