import React from 'react'
import { createBrowserRouter, useRoutes } from 'react-router-dom'

import Home from '@/pages/home'
import List from '@/pages/list'
import Watch from '@/pages'
import { LISTROUTE } from './constant'

const appRouter = [
  {
    index: true,
    element: <Home />
  }, {
    path: LISTROUTE,
    element: <List />
  }
]
const AppRoutes = () => {
  const routing = useRoutes(appRouter)
  return  <> { routing } </>
}
export default AppRoutes