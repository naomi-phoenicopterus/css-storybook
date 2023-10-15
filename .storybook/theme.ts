// .storybook/YourTheme.js

import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  fontBase: '"Open Sans", sans-serif',
  brandImage: 'public/logo.png',
  brandTarget: '_self',

  // color
  colorSecondary: '#c6562d',

  // UI サイドバー
  appBg: '#f2f0ef',
});