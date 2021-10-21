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
  title: 'Components/OptionList',
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

const angularTemplate = require('!!raw-loader!./OptionListAngular.stories.html').default as string; // eslint-disable-line

export const Angular = () => {
  const name = text('name', '');
  const options:IOpOptionListOption<string>[] = object(
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
    template: angularTemplate,
    props: {
      name,
      options,
      selectedChange: action('selectedChange'),
    },
  };
};

const htmlTemplate = require('!!raw-loader!./OptionListHTML.stories.html').default as string; // eslint-disable-line

export const HTML = () => ({
  title: 'HTML',
  template: htmlTemplate,
});
