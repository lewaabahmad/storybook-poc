import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';

import Input from '../components/input'

storiesOf('Input Field', module)
  .add('valid', () => (
    <Input valid={ true }/>
  ))
  .add('invalid', () => (
    <Input valid={ false }/>
  ));