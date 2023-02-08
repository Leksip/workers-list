import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {NewUser} from '../../public-models';
import {AlertService} from '../../../shared/alert.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent {

  @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(7)]],
    repeatPassword: [null, [Validators.required, Validators.minLength(7)]]
  });
  isLoading = false;
  hide1 = true;
  hide = true;
  correctivePasswords = false;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    private alertService: AlertService
  ) {
  }


  onSubmit() {
    this.isLoading = true;
    let newUser: NewUser = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };
    this.auth.registration(newUser).subscribe(
      {
        next: () => {
          this.isLoading = false;
          this.router.navigate(['/']);
          this.closeDialog.emit();
          this.alertService.success('Вы успешно зарегистрировались');
        },
        error: () => {
          this.isLoading = false;
          this.alertService.warning('Произошла ошибка');
        }
      }
    );
  }

  comparePasswords() {
    this.correctivePasswords = false;
    this.correctivePasswords = this.form.get('password').value === this.form.get('repeatPassword').value;
  }
}
