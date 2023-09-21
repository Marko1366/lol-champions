import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DarkinsComponent } from './darkins/darkins.component';
import { DarkinSetupComponent } from './darkins/darkin-setup/darkin-setup.component';
import { DarkinFeatureComponent } from './darkins/darkin-feature/darkin-feature.component';
import { DarkinEditComponent } from './darkins/darkin-edit/darkin-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/darkins', pathMatch: 'full' },
  {
    path: 'darkins',
    component: DarkinsComponent,
    children: [
      { path: '', component: DarkinSetupComponent },
      { path: 'new', component: DarkinEditComponent },
      { path: ':id', component: DarkinFeatureComponent },
      { path: ':id/edit', component: DarkinEditComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
