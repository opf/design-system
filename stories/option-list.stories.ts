import { moduleMetadata } from '@storybook/angular';
import { withKnobs, object } from '@storybook/addon-knobs';
import { FormsModule } from '@angular/forms';
import { OpOptionListModule, IOpOptionListOption } from '../packages/angular/src/public-api';

// const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'TS/OptionList',
  decorators: [
    withKnobs,
    moduleMetadata({
      imports: [
        FormsModule,
        OpOptionListModule,
      ],
    }),
  ],
};

export const Basic = () => {
  const options: IOpOptionListOption<string>[] = object(
    'options',
    [
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
    ],
  );

  return {
    title: 'Basic',
    template: `
<op-option-list
  [options]="options"
  [(ngModel)]="selected"
></op-option-list>
    `,
    props: {
      options,
    },
  };
};
