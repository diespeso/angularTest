import { Component, OnInit } from '@angular/core';
import { HealthCheckerService } from './health-checker.service';

@Component({
  selector: 'app-health-checker',
  templateUrl: './health-checker.component.html',
  styleUrls: ['./health-checker.component.css']
})
export class HealthCheckerComponent implements OnInit {

  constructor(private healthChecker: HealthCheckerService) { }

  ngOnInit(): void {
    this.healthChecker.check()
      .subscribe((health) => console.log('health: ', health));
  }

}
