import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@cricardo-design-system/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento box</Text>
 },
 argTypes: {
  children: {
    control: {
      disable: true,
    },
  },
 },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}