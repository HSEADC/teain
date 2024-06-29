import { createRoot } from 'react-dom/client'
import React, { Suspense } from 'react'
import './index.css'
import S_SearchResults from './components/SuperOrganisms/S_SearchResults/S_SearchResults'

const S_Recipes = React.lazy((() => import('./components/SuperOrganisms/S_Recipes/S_Recipes')))

const root = createRoot(document.querySelector('#app'))
root.render(<Suspense><S_SearchResults/></Suspense>)
