import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../../public-models';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  form: FormGroup = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(7)]]
  });
  isLoading = false;

  constructor(
    public dialogRef: MatDialogRef<LoginPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    public auth: AuthService,
    private router: Router,
  ) {
  }

  hide = true;

  test() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.isLoading = true
    let user: User = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    };
    this.auth.login(user).subscribe(
      {
        next: () => {
          this.isLoading = false
          this.router.navigate(['admin']);
          this.dialogRef.close();
        },
        error: ()=>{
          this.isLoading = false
        }
      }
    );
  }
}
