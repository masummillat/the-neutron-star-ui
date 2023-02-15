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
export const Filled: Story = {
  args: {
    label: 'Button',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Button',
    buttonType: 'outlined'
  },
};

export const Text: Story = {
  args: {
    size: 'large',
    label: 'Button',
    buttonType: 'text',
  },
};

export const Elevated: Story = {
  args: {
    size: 'small',
    label: 'Button',
    buttonType: 'outlined'
  },
};
export const Tonal: Story = {
  args: {
    size: 'medium',
    label: 'Outlined',
    buttonType: 'tonal'
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
};



