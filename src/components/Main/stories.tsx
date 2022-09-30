import type { Meta, Story } from '@storybook/react';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Titulo React Avançado',
    description: 'Descrição do curso React Avançado'
  }
} as Meta;

export const Default: Story = (args) => <Main {...args} />;

export const Basic: Story = (args) => <Main {...args} />;
Basic.args = {
  title: 'Titulo React Avançado 2',
  description: 'Descrição do curso React Avançado 2'
};
