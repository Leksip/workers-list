import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../alert.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  @Input() timeout = 3000;
  public text: string;
  public type: string;
  private alertSub$: Subscription;

  constructor(
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.alertSub$ = this.alertService.alert$.subscribe(alert => {
      this.text = alert.text;
      this.type = alert.type;

      const timeout = setTimeout(() => {
        clearTimeout(timeout);
        this.text = '';
      }, this.timeout);
    });
  }

  ngOnDestroy() {
    this.alertSub$.unsubscribe();
  }
}
