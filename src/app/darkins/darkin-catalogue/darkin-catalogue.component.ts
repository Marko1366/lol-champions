import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Darkin } from '../darkin.model';
import { DarkinService } from '../darkin.service';

@Component({
  selector: 'app-darkin-catalogue',
  templateUrl: './darkin-catalogue.component.html',
  styleUrls: ['./darkin-catalogue.component.css'],
})
export class DarkinCatalogueComponent implements OnInit, OnDestroy {
  darkins: Darkin[];
  subscription: Subscription;

  constructor(
    private darkinService: DarkinService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.subscription = this.darkinService.darkinsChanged.subscribe(
      (darkins: Darkin[]) => {
        this.darkins = darkins;
      }
    );
    this.darkins = this.darkinService.getDarkins();
  }

  onNewDarkin() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
