// src/components/Atoms/A_Text/A_Text.stories.js
import React from 'react'
import A_Text from './A_Text'

export default {
  title: 'A_Text',
  component: A_Text,
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' }
  }
}

const Template = (args) => <A_Text {...args} />

export const Text = Template.bind({})
Text.args = {
  children: 'Любимый чай',
  className: 'A_Text'
}
