import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../components'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const SmallAvatar: Story = {
  args: {
    size: 'sm'
  },
};
export const MediumAvatar: Story = {
    args: {
      size: 'md'
    },
  };
  export const LargeAvatar: Story = {
    args: {
      size: 'lg'
    },
  };
  export const AvatarWithClass: Story = {
    args: {
      size: 'lg',
      className: 'ring-primary-40'
    },
  };



