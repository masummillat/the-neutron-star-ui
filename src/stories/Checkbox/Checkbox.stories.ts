import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox} from '../../components'

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: 'Example/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const SimpleCheckbox: Story = {
  args: {
    label: 'Checkbox',
    helperText: "This is a helper text"
  },
};



