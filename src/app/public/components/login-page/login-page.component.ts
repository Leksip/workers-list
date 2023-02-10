import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../public-models';
import {AlertService} from '../../../shared/alert.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  @Output() closeDialog: EventEmitter<any> = new EventEmitter<any>();

  form: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(7)]]
  });
  isLoading = false;
  hide = true;

  constructor(
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
    private alert: AlertService
  ) {
  }


  onSubmit() {
    this.isLoading = true;
    let user: User = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };
    this.auth.login(user).subscribe(
      {
        next: () => {
          this.isLoading = false;
          this.router.navigate(['admin']);
          this.alert.success('Вход выполнен');
          this.closeDialog.emit();
        },
        error: () => {
          this.isLoading = false;
        }
      }
    );
  }

}
