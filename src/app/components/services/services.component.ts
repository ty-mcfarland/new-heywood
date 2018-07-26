import { Component, OnInit } from '@angular/core';
import { Service } from './services.types';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public services: Service[] = [
    {
      title: 'Initial Evaluation',
      description: 'A structured clinical interview...',
      path: 'evaluation',
    },
    {
      title: 'Individual Psychotherapy',
      description: 'Face to face individual meetings...',
      path: 'psychotherapy',
    },
    {
      title: 'Relationship Therapy',
      description: 'Communication skills training and awareness involves...',
      path: 'relationship',
    },
    {
      title: 'Group Psychotherapy',
      description: 'Individuals sometimes benefit more rapidly...',
      path: 'group',
    }
  ];
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  public navigateToService(servicePath: string) {
    console.log(servicePath);
    this.router.navigate([servicePath], { relativeTo: this.route });
  }

}
