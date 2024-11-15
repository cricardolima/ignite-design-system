import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInputProps, TextInput } from '@cricardo-design-system/react'

export default {
  title: 'Form/Text input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2'}}>
            <Text size='sm'>Email address</Text>
            {Story()}
        </Box>
    ),
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Digite algo',
    },
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    },
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'cal.com/',
        placeholder: 'your-username',
    },
}