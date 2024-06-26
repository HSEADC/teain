import React from 'react'
import O_PreArticle from './O_PreArticle'

export default {
  title: 'O_PreArticle',
  component: O_PreArticle,
  argTypes: {
    translated_name: { control: 'text' },
    right_text: { control: 'text' },
    link: { control: 'text' },
    link_text: { control: 'text' }
  }
}

const Template = (args) => <O_PreArticle {...args} />

export const PreArticle = Template.bind({})
PreArticle.args = {
  translated_name: 'виды чая',
  right_text: 'Все классические чаи можно разделить только на&nbsp;пять видов по&nbsp;степени ферментации. Задача организации, в&nbsp;особенности&nbsp;же постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение соответствующий условий активизации.',
  link: 'https://www.google.com',
  link_text: 'Как правильно заваривать чай разной ферментации?'

}