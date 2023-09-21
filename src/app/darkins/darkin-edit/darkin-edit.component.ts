import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DarkinService } from '../darkin.service';

@Component({
  selector: 'app-darkin-edit',
  templateUrl: './darkin-edit.component.html',
  styleUrls: ['./darkin-edit.component.css'],
})
export class DarkinEditComponent implements OnInit {
  id: number;
  editMode = false;
  darkinForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private darkinService: DarkinService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    // const newDarkin = new Darkin(
    // this.darkinForm.value = ['name']
    // this.darkinForm.value = ['description']
    // this.darkinForm.value = ['imagePath']

    if (this.editMode) {
      this.darkinService.updateDarkin(this.id, this.darkinForm.value);
    } else {
      this.darkinService.addDarkin(this.darkinForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let darkinName = '';
    let darkinImagePath = '';
    let darkinDescription = '';

    if (this.editMode) {
      const darkin = this.darkinService.getDarkin(this.id);
      darkinName = darkin.name;
      darkinImagePath = darkin.imagePath;
      darkinDescription = darkin.description;
    }

    this.darkinForm = new FormGroup({
      name: new FormControl(darkinName, Validators.required),
      imagePath: new FormControl(darkinImagePath, Validators.required),
      description: new FormControl(darkinDescription, Validators.required),
    });
  }
}
