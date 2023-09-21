import { Component, Input, OnInit } from '@angular/core';

import { Darkin } from '../../darkin.model';

@Component({
  selector: 'app-darkin-unit',
  templateUrl: './darkin-unit.component.html',
  styleUrls: ['./darkin-unit.component.css'],
})
export class DarkinUnitComponent implements OnInit {
  @Input() darkin: Darkin;
  @Input() index: number;

  ngOnInit() {}
}
