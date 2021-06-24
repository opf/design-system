import { moduleMetadata } from '@storybook/angular';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FormsModule } from '@angular/forms';

import {
  OpOptionListModule,
  OpOptionListComponent,
  IOpOptionListOption,
} from '../packages/angular/src/public-api';

export default {
  title: 'Usage/OptionList',
  component: OpOptionListComponent,
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

const angularTemplate = require('!!raw-loader!./option-list-angular.stories.html'); // eslint-disable-line

export const Angular = () => {
  const name = text('name', '');
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
    title: 'Angular',
    template: angularTemplate.default,
    props: {
      name,
      options,
      selectedChange: action('selectedChange'),
    },
  };
};

const htmlTemplate = require('!!raw-loader!./option-list-html.stories.html'); // eslint-disable-line

export const HTML = () => {
  return {
    title: 'HTML',
    template: htmlTemplate.default,
  };
};
