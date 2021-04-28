import { Component } from '@angular/core';
import { AppMessages } from './core/messages/en.app.message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = AppMessages.appTitle;
}
