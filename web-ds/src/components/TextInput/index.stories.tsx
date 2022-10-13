import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRoot } from '.'

export default {
  title: 'Components/TextInput',
  component: TextInput.root,
  args: {
    children: [
      <TextInput.icon>
        <Envelope />
      </TextInput.icon>,
      <TextInput.input placeholder='Text input placeholder' />
    ],

  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextInputRoot>

export const Default: StoryObj<TextInputRoot> = {}
export const WithoutIcon: StoryObj<TextInputRoot> = {
  args: {
    children: [
      <TextInput.input placeholder='Text input placeholder' />
    ],

  },
}
