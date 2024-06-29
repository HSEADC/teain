import { createRoot } from 'react-dom/client'
// import S_TeaCard from '../components/SuperOrganisms/S_TeaCard/S_TeaCard'
import React, { Suspense } from 'react'


const W_RecipeCardL = React.lazy(() => import('./components/Wrappers/W_RecipeCardL/W_RecipeCardL'));
const O_NavBar = React.lazy(() => import('./components/Organisms/O_NavBar/O_NavBar'));
const C_Teas = React.lazy(() => import('./components/Collections/C_Teas/C_Teas'));


const root = createRoot(document.querySelector('#recipes'))
root.render(<Suspense><W_RecipeCardL/></Suspense>)


const O_NavBarRoot = createRoot(document.querySelector('#O_NavBar'))

O_NavBarRoot.render(<Suspense><O_NavBar/></Suspense>)


const W_TeaTypeCards = createRoot(document.querySelector('#W_TeaTypeCards'))

W_TeaTypeCards.render(<Suspense><C_Teas/></Suspense>)