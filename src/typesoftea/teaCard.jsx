import { createRoot } from 'react-dom/client'
import '../index.css'
import S_TeaCard from '../components/SuperOrganisms/S_TeaCard/S_TeaCard'
import React from 'react'

const root = createRoot(document.querySelector('#app'))
root.render(<S_TeaCard/>)