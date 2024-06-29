import { createRoot } from 'react-dom/client'
import '../index.css'
import React, { lazy, Suspense } from 'react'

const S_Recipe = lazy(() => import('../components/SuperOrganisms/S_Recipe/S_Recipe'));


const root = createRoot(document.querySelector('#app'))
root.render(<Suspense ><S_Recipe/></Suspense>)