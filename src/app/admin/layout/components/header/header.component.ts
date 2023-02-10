import {Component} from '@angular/core';
import {AuthService} from '../../../../public/services/auth.service';
import {AlertService} from '../../../../shared/alert.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private auth: AuthService,
    private alertService: AlertService
  ) {
  }

  logout() {
    this.auth.logout();
    this.alertService.warning('Вы вышли из системы');
  }

}
