import { createRoot } from 'react-dom/client'
import '../index.css'
// import S_TeaCard from '../components/SuperOrganisms/S_TeaCard/S_TeaCard'
import React, { lazy, Suspense } from 'react'

const S_TeaCard = lazy(() => import('../components/SuperOrganisms/S_TeaCard/S_TeaCard'));


const root = createRoot(document.querySelector('#app'))
root.render(<Suspense ><S_TeaCard/></Suspense>)