import { createRoot } from 'react-dom/client'
import '../index.css'
import React, { lazy, Suspense } from 'react'

const S_Article = lazy(() => import('../components/SuperOrganisms/S_Article/S_Article'));


const root = createRoot(document.querySelector('#app'))
root.render(<Suspense ><S_Article/></Suspense>)