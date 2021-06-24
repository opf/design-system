import '!style-loader!css-loader!sass-loader!../packages/styles/sass/index.sass';

import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const decorators = [];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Design Principles',
        'Patterns',
        'Tokens',
        [ 'Colors' ],
        'Components',
        [ 'OptionList' ],
      ],
    },
  },
};
