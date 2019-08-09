import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../assets/css/App.scss';

import Header from '../components/organisms/Header';

storiesOf('Organisms|Header', module)
  .add('Header', () => <Header/>);
