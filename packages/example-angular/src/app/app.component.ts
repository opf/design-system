import { Component } from '@angular/core';
import { IOpOptionListOption } from '@openproject/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'example-angular';

  selectedOption = 'No option selected';

  options: IOpOptionListOption<string>[] = [
    {
      value: 'With description',
      title: 'With description',
      disabled: false,
      description: 'This option has a description',
    },
    {
      value: 'Without description',
      title: 'Without description',
      disabled: false,
      description: '',
    },
    {
      value: 'Disabled with description',
      title: 'Disabled with description',
      disabled: true,
      description: 'This is disabled and has a description',
    },
    {
      value: 'Almost useless',
      title: 'Almost useless',
      disabled: true,
      description: '',
    },
  ];
}
