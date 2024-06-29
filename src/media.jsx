import { createRoot } from 'react-dom/client'
import React, { Suspense } from 'react'
import './index.css'

const O_NavBar = React.lazy(() => import('./components/Organisms/O_NavBar/O_NavBar'));


const O_NavBarRoot = createRoot(document.querySelector('#O_NavBar'))

O_NavBarRoot.render(<Suspense><O_NavBar/></Suspense>)