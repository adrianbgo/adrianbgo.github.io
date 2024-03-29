/* eslint-disable */
import type { Meta, StoryObj } from '@storybook/react';

import SocialIcon from './SocialIcon';

const meta: Meta<typeof SocialIcon> = {
  component: SocialIcon
};

export default meta;

type Story = StoryObj<typeof SocialIcon>;

export const Default: Story = {
  args: {
    iconName: 'x'
  }
};
