import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  message: string;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (params['authFailed']) {
        this.message = 'Сессия истекла, пожалуйста войдите заного';
      }
    });
  }

}
