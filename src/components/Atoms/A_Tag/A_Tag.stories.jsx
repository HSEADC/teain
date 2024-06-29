import React from 'react'
import A_Tag from './A_Tag'


export default {
  title: 'Tag',
  component: A_Tag,
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
    active: { control: 'boolean' },
    size: { control: 'select', options: ['s', 'm', 'l'] }
  }
}

const Template = (args) => <A_Tag {...args} />

export const Tag = Template.bind({})
Tag.args = {
  children: 'успокаивающий',
  className: '',
  active: false,
  size: 's'

}
