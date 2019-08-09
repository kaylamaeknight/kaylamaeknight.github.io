import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../assets/css/App.scss';

import Footer from '../components/organisms/Footer';

storiesOf('Organisms|Footer', module)
  .add('Footer', () => <Footer/>);
