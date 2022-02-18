import {Component, Input, OnInit} from '@angular/core';
import {Personne} from "../../Model/Personne";

@Component({
  selector: 'app-cvdetail',
  templateUrl: './cvdetail.component.html',
  styleUrls: ['./cvdetail.component.css']
})
export class CvdetailComponent implements OnInit {
@Input()personne:Personne;
  constructor() { }

  ngOnInit(): void {
  }

}
