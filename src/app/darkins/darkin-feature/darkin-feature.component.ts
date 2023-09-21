import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Darkin } from '../darkin.model';
import { DarkinService } from '../darkin.service';

@Component({
  selector: 'app-darkin-feature',
  templateUrl: './darkin-feature.component.html',
  styleUrls: ['./darkin-feature.component.css'],
})
export class DarkinFeatureComponent implements OnInit {
  darkin: Darkin;
  id: number;

  constructor(
    private darkinService: DarkinService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.darkin = this.darkinService.getDarkin(this.id);
    });
  }
}
