import { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@cricardo-design-system/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/renatorib.png',
    alt: 'Alternativo',
 },
 argTypes: {
  src: {
    control: {
      type: 'text',
    },
  },
 },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined,
    },
}