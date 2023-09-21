import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Darkin } from './darkin.model';

@Injectable()
export class DarkinService {
  darkinsChanged = new Subject<Darkin[]>();

  private darkins: Darkin[] = [
    new Darkin(
      'Aatrox',
      'The Darkin Blade',
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg'
    ),
    new Darkin(
      'Naafiri',
      'The Hound Of A Hundred Bites',
      'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Naafiri_0.jpg'
    ),
  ];

  constructor() {}

  getDarkins() {
    return this.darkins.slice();
  }

  getDarkin(index: number) {
    return this.darkins[index];
  }

  addDarkin(darkin: Darkin) {
    this.darkins.push(darkin);
    this.darkinsChanged.next(this.darkins.slice());
  }

  updateDarkin(index: number, newDarkin: Darkin) {
    this.darkins[index] = newDarkin;
    this.darkinsChanged.next(this.darkins.slice());
  }

  deleteDarkin(index: number) {
    this.darkins.splice(index, 1);
    this.darkinsChanged.next(this.darkins.slice());
  }
}
