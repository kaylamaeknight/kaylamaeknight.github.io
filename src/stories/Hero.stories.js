import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../assets/css/App.scss';

import Hero from '../components/organisms/Hero';

storiesOf('Organisms|Sections', module)
  .add('Hero', () => <Hero heading="Some Heading" subheading="Some subheading" paragraph="Paragraph text is here" />)
  .add('Hero - 100vh', () => <Hero heading="Some Heading" subheading="Some subheading" paragraph="Paragraph text is here" className="vh-100" />);
