import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis labore consequuntur doloribus, voluptatibus tenetur dolor suscipit nulla numquam, totam voluptatum repudiandae saepe vel possimus, veritatis cum fuga autem eligendi deleniti!',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: { type: 'inline-radio' },
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomText: StoryObj<TextProps> = {
  args: {
    children: 'Custom text',
    as: 'strong',
    size: 'xl',
  },
}