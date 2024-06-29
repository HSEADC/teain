import { createRoot } from 'react-dom/client'
import React, { Suspense } from 'react'
import './index.css'

const S_SearchResults = React.lazy(
  () => import('./components/SuperOrganisms/S_SearchResults/S_SearchResults')
)

const root = createRoot(document.querySelector('#app'))
root.render(
  <Suspense>
    <S_SearchResults />
  </Suspense>
)
