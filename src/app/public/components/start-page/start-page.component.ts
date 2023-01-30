import { Component } from '@angular/core';
import {TuiDay} from '@taiga-ui/cdk';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent {
  value: TuiDay | null = null;

  onDayClick(day: TuiDay): void {
    this.value = day;
  }
}
