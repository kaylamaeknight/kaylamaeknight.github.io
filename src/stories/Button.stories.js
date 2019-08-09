import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../assets/css/App.scss';

import Button from '../components/atoms/Button';

storiesOf('Atoms|Button', module)
  .add('Primary', () => <Button text="Hello Button" className="btn-primary" />)
  .add('Secondary', () => <Button text="Hello Button" className="btn-secondary" />);
