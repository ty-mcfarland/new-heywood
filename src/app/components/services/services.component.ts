import { Component, OnInit } from '@angular/core';
import { Service } from './services.types';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services: Service[] = [
    {
      title: 'Initial Evaluation',
      description: 'A structured clinical interview...'
    },
    {
      title: 'Individual Psychotherapy',
      description: 'Face to face individual meetings...'
    },
    {
      title: 'Relationship Therapy',
      description: 'Communication skills training and awareness involves...'
    },
    {
      title: 'Group Psychotherapy',
      description: 'Individuals sometimes benefit more rapidly...'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
