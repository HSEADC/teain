import React from 'react'
import O_TeaType from './O_TeaType'

import './O_TeaType.scss'

const mockData = [
  {
    id: 'rec1',
    fields: {
      top_name: 'Ассам',
      bottom_name: 'Индийский черный',
      image: [
        {
          url: 'https://v5.airtableusercontent.com/v3/u/30/30/1719230400000/rIxOV-INAX-gHmvl6D_SHQ/P9461VBcozGAF1wKfsfdM06wSjJAkR8lS7JP226YARqHg9DDNp_miTLiTA4hEIW_hgcmKkF2BotthLOAE2VTQGLQ3kf6EX8CSw2rez1qg41q_aPpC4SvVTewJfLKVs0j6-6hDGYb0-dxvTRiJH7Fh2IPwHXCk_WMtNa3TgGuGtA/AnvNez2GJ_zBgh47YeKGzcIU_PRWaTkozUzXFnmv5PU'
        }
      ],
      tea_type: ['black_tea']
    }
  },
  {
    id: 'rec2',
    fields: {
      top_name: 'Цимэнь Хунча',
      bottom_name: 'Кимун',
      image: [
        {
          url: 'https://v5.airtableusercontent.com/v3/u/30/30/1719230400000/z4lXETJkAgskKLxZG5QXcw/vuyhdTQrlRyWLTIWkh0EwRgloirW59MfvhZ24JHLhFrm1FDEEXh0lsOCsI-glqDL0VG5v2rCs3BuQiljsd59cQTzHN9ftPL92mgNCixThDwF--ivNOJ4y2gXKUDUkZAEzx6dadWw-ImYDnfx_DDQzYSatmpnCg12ksgeRAHrTNM/Ls196Xi5sjmWlyc0lLQWgbpdXKBrIsdt8MQZqFSMMs0'
        }
      ],
      tea_type: ['black_tea']
    }
  },
  {
    id: 'rec2',
    fields: {
      top_name: 'Цимэнь Хунча',
      bottom_name: 'Кимун',
      image: [
        {
          url: 'https://v5.airtableusercontent.com/v3/u/30/30/1719230400000/z4lXETJkAgskKLxZG5QXcw/vuyhdTQrlRyWLTIWkh0EwRgloirW59MfvhZ24JHLhFrm1FDEEXh0lsOCsI-glqDL0VG5v2rCs3BuQiljsd59cQTzHN9ftPL92mgNCixThDwF--ivNOJ4y2gXKUDUkZAEzx6dadWw-ImYDnfx_DDQzYSatmpnCg12ksgeRAHrTNM/Ls196Xi5sjmWlyc0lLQWgbpdXKBrIsdt8MQZqFSMMs0'
        }
      ],
      tea_type: ['black_tea']
    }
  },
  {
    id: 'rec2',
    fields: {
      top_name: 'Цимэнь Хунча',
      bottom_name: 'Кимун',
      image: [
        {
          url: 'https://v5.airtableusercontent.com/v3/u/30/30/1719230400000/z4lXETJkAgskKLxZG5QXcw/vuyhdTQrlRyWLTIWkh0EwRgloirW59MfvhZ24JHLhFrm1FDEEXh0lsOCsI-glqDL0VG5v2rCs3BuQiljsd59cQTzHN9ftPL92mgNCixThDwF--ivNOJ4y2gXKUDUkZAEzx6dadWw-ImYDnfx_DDQzYSatmpnCg12ksgeRAHrTNM/Ls196Xi5sjmWlyc0lLQWgbpdXKBrIsdt8MQZqFSMMs0'
        }
      ],
      tea_type: ['black_tea']
    }
  },
  {
    id: 'rec2',
    fields: {
      top_name: 'Цимэнь Хунча',
      bottom_name: 'Кимун',
      image: [
        {
          url: 'https://v5.airtableusercontent.com/v3/u/30/30/1719230400000/z4lXETJkAgskKLxZG5QXcw/vuyhdTQrlRyWLTIWkh0EwRgloirW59MfvhZ24JHLhFrm1FDEEXh0lsOCsI-glqDL0VG5v2rCs3BuQiljsd59cQTzHN9ftPL92mgNCixThDwF--ivNOJ4y2gXKUDUkZAEzx6dadWw-ImYDnfx_DDQzYSatmpnCg12ksgeRAHrTNM/Ls196Xi5sjmWlyc0lLQWgbpdXKBrIsdt8MQZqFSMMs0'
        }
      ],
      tea_type: ['black_tea']
    }
  },
  {
    id: 'rec2',
    fields: {
      top_name: 'Цимэнь Хунча',
      bottom_name: 'Кимун',
      image: [
        {
          url: 'https://v5.airtableusercontent.com/v3/u/30/30/1719230400000/z4lXETJkAgskKLxZG5QXcw/vuyhdTQrlRyWLTIWkh0EwRgloirW59MfvhZ24JHLhFrm1FDEEXh0lsOCsI-glqDL0VG5v2rCs3BuQiljsd59cQTzHN9ftPL92mgNCixThDwF--ivNOJ4y2gXKUDUkZAEzx6dadWw-ImYDnfx_DDQzYSatmpnCg12ksgeRAHrTNM/Ls196Xi5sjmWlyc0lLQWgbpdXKBrIsdt8MQZqFSMMs0'
        }
      ],
      tea_type: ['black_tea']
    }
  }
]

const mockDataTypeTea = [
  {
    id: 'rec10',
    fields: {
      translated_name: 'черный чай',
      description:
        'Платформа для всех, кто хочет разбираться в&nbsp;чае, уважает культуру\n' +
        'чаепития или любит готовить напитки в&nbsp;кругу близких\n' +
        'и&nbsp;наедине с&nbsp;собой.\n'
    }
  }
]

export default {
  title: 'O_TeaType',
  component: O_TeaType,
  argTypes: {
    className: { control: 'text' },
    items: { control: 'object' },
    tea_type: { control: 'object' }
  }
}

const Template = (args) => <O_TeaType {...args} />

export const TeaType = Template.bind({})
TeaType.args = {
  className: 'sampleClass',
  items: mockData,
  tea_type: mockDataTypeTea
}
