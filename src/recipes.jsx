import { createRoot } from 'react-dom/client'
import React, { Suspense } from 'react'
// import S_Recipes from './components/SuperOrganisms/S_Recipes/S_Recipes'

const S_Recipes = React.lazy((() => import('./components/SuperOrganisms/S_Recipes/S_Recipes')))

const root = createRoot(document.querySelector('#app'))
root.render(<Suspense><S_Recipes/></Suspense>)
