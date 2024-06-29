import React from 'react'
import O_NavBar from './O_NavBar'


export default {
  title: 'O_NavBar.jsx',
  component: O_NavBar,
  argTypes: {
    className: { control: 'text' },
    items: { control: 'object' },
    tea_type: { control: 'object' }
  }
}

const Template = (args) => <O_NavBar {...args} />

export const Header = Template.bind({})
