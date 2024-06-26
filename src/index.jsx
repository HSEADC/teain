import { createRoot } from 'react-dom/client'
// import S_TeaCard from '../components/SuperOrganisms/S_TeaCard/S_TeaCard'
import React, { Suspense } from 'react'

const W_RecipeCardL = React.lazy(() => import('./components/Wrappers/W_RecipeCardL/W_RecipeCardL'));



const root = createRoot(document.querySelector('#recipes'))
root.render(<Suspense><W_RecipeCardL/></Suspense>)