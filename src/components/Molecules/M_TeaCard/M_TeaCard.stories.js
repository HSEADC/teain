// src/components/Atoms/A_Text/A_Text.stories.js
import React from 'react'
import M_TeaCard from './M_TeaCard'

import './M_TeaCard.scss'

export default {
  title: 'M_TeaCard',
  component: M_TeaCard,
  argTypes: {
    className: { control: 'text' },
    imgPath: { control: 'text' },
    top_name: { control: 'text' },
    bottom_name: { control: 'text' }
  }
}

const Template = (args) => <M_TeaCard {...args} />

export const TeaCard = Template.bind({})
TeaCard.args = {
  className: 'sampleClass',
  imgPathStor:
    'https://v5.airtableusercontent.com/v3/u/30/30/1719230400000/z4lXETJkAgskKLxZG5QXcw/vuyhdTQrlRyWLTIWkh0EwRgloirW59MfvhZ24JHLhFrm1FDEEXh0lsOCsI-glqDL0VG5v2rCs3BuQiljsd59cQTzHN9ftPL92mgNCixThDwF--ivNOJ4y2gXKUDUkZAEzx6dadWw-ImYDnfx_DDQzYSatmpnCg12ksgeRAHrTNM/Ls196Xi5sjmWlyc0lLQWgbpdXKBrIsdt8MQZqFSMMs0',
  top_nameS: 'John Doe',
  bottom_nameS: 'John Doe'
}
