import { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@cricardo-design-system/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2'}}>
            {Story()}
        </Box>
    ),
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
}

export const Full: StoryObj<MultiStepProps> = {
    args: {
        currentStep: 4,
    },
}