import { createRoot } from 'react-dom/client'
import React, { Suspense } from 'react'
// import S_TypesOfTeaPage from './components/SuperOrganisms/S_TypesOfTeaPage/S_TypesOfTeaPage'

const S_TypesOfTeaPage = React.lazy(
  () => import('./components/SuperOrganisms/S_TypesOfTeaPage/S_TypesOfTeaPage')
)

const root = createRoot(document.querySelector('#app'))
root.render(
  <Suspense>
    <S_TypesOfTeaPage />
  </Suspense>
)
