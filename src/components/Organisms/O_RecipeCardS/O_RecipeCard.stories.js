import React from 'react'
import O_RecipeCard from './O_RecipeCard'


const mockData =  {
  "Name": "thyme_and_apricots",
  "translated_name": "чабрец с курагой",
  "image": [
    {
      "url": "https://v5.airtableusercontent.com/v3/u/30/30/1719338400000/IRtKR3Mn7Fvpt_n2yvHTHA/WfPIy3OuU34Ta-N0MulqNlABGXbYvliQcLNxsGebq5CdSGEZcbww2moy2tROBK4qQxOrtq7SsA3cFHqz_R0PepMFSemsvnjTjFIOvVv6jLLTSRmV4-gYsKQ5wcLrEVNW0i490TsT1iuX2muvvygP-7ot95idqSywe1Pa43vDC8E/TxmYpZJCbMuQGUpCdCgstz8POUWRquqigWHPDF3BW5Y"
    }
  ],

  "imageBig": [
    {
      "url": "https://v5.airtableusercontent.com/v3/u/30/30/1719338400000/IRtKR3Mn7Fvpt_n2yvHTHA/WfPIy3OuU34Ta-N0MulqNlABGXbYvliQcLNxsGebq5CdSGEZcbww2moy2tROBK4qQxOrtq7SsA3cFHqz_R0PepMFSemsvnjTjFIOvVv6jLLTSRmV4-gYsKQ5wcLrEVNW0i490TsT1iuX2muvvygP-7ot95idqSywe1Pa43vDC8E/TxmYpZJCbMuQGUpCdCgstz8POUWRquqigWHPDF3BW5Y"
    }
  ],
  "tags": [
    "recYH2OxDwNo5KGF3",
    "recoDfS4EufThXt5B",
    "reclXDYDuSSFWLXK2",
    "recrOa2Nd4HN7CRxQ",
    "recfVD7IAD9ux8JWD"
  ],
  "tag_names":  ['soothing', 'immune', 'relaxing', 'black_tea', 'herbal'],
  "translated_tag_names":  ['успокаивающий', 'для иммунитета', 'расслабляющий', 'черный чай', 'травяной'],
  "description": "Чабрец с курагой — это травяной чай с ярким вкусом и ароматом. Этот чай поможет вам расслабиться и насладиться моментом.",
}



export default {
  title: 'O_RecipeCard.jsx',
  component: O_RecipeCard,
  argTypes: {
    recipe: { control: 'object' },
    size: {control: "select", options: ["s", "l"]}
  }
}

const Template = (args) => <O_RecipeCard {...args} />

export const RecipeCard = Template.bind({})
RecipeCard.args = {
  recipe: mockData,
  size: "s"
}
