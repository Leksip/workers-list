import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../alert.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  public text: string
  public type: string

  constructor(
    private alertService: AlertService
  ) {
  }

  ngOnInit() {
    this.alertService.alert$.subscribe(alert=>{
      this.text = alert.text
      this.type = alert.type

      const timeout = setTimeout(()=>{
        clearTimeout(timeout)
        this.text = ''
      }, 3000)
    })
  }

}
