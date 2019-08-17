import { configure } from '@storybook/react';
import { addParameters } from '@storybook/react';
import customTheme from './customTheme';

addParameters({
  options: {
    theme: customTheme,
  },
});

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
