import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-workers-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.scss']
})
export class WorkerFormComponent {
  socialList: string[] = ['vk', 'instagram', 'facebook', 'twitter'];
  form: FormGroup = this.fb.group({
    name: [null, Validators.required],
    profileImage: [null],
    birthday: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    socials: [[]],
    social: this.fb.group({
      vk: [null],
      instagram: [null],
      facebook: [null],
      twitter: [null]
    }),
    tel: [null, Validators.required],
    description: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder
  ) {
  }

  test() {
    console.log(this.form.get('socials').value);
    console.log(this.form.get('social').value);
  }

  delete() {
    this.socialList.forEach(item => {
      if (!this.form.get('socials').value.includes(item)) {
        this.form.get('social').get(item).patchValue(null);
      }
    });
  }
}
