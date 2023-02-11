import type { Meta, StoryObj } from '@storybook/react';
import {Button} from '../../components'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    buttonType: 'outlined'
  },
};
export const Outlined: Story = {
  args: {
    size: 'medium',
    label: 'Outlined',
    buttonType: 'outlined'
  },
};
export const Text: Story = {
  args: {
    size: 'medium',
    label: 'Text',
    buttonType: 'text'
  },
};
export const Disabled: Story = {
  args: {
    size: 'medium',
    label: 'Outlined',
    buttonType: 'outlined',
    disabled: true,
    icon: '+'
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading',
    loading: true,
    icon: '+'
  },
};
