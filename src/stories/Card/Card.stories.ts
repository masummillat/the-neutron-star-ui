import type { Meta, StoryObj } from '@storybook/react';
import { Card} from '../../components'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const SimpleCard: Story = {
  args: {
    wrapperClass: 'shadow'
  },
};
export const SimpleCardMedium: Story = {
  args: {
    wrapperClass: 'shadow-md'
  },
};
export const SimpleCardLargeShadow: Story = {
  args: {
    wrapperClass: 'shadow-lg'
  },
};



