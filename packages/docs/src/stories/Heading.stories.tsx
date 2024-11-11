import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@cricardo-design-system/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: { type: 'inline-radio' },
    },
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomHeading: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
        description: {
            story: 'Por padrão, o componente Heading é renderizado como um h2. No entanto, você pode passar a prop "as" para renderizar o componente como um h1, h3, h4, h5 ou h6.'
        }
    }
  }
}