import React from 'react'
import { useLocation } from 'react-router-dom'
import MenuItem from './components/menuItem'
import { menuItems } from './menu.data'
import BrandTitle from '@/common/brandTitle'

const styles = {
  sidebar: `
    hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 
    transform hidden fixed top-0 left-0 bottom-0 z-[60] bg-primary-800 py-10 w-60 opacity-90
    border-r border-slate-600 pt-7 pb-10 overflow-y-auto scrollbar-y lg:w-48 lg:block 
    lg:translate-x-0 lg:right-auto lg:bottom-0 lg:left-[max(0px,calc(50%-45rem))]
  `,
  menu: 'flex flex-col gap-y-2 my-8',
  divider: 'h-[2px] bg-slate-600 mx-4'
}
function Sidebar() {
  const location = useLocation()
  
  return (
    <div className={styles.sidebar} id="docs-sidebar" style={{ backdropFilter: "blur(10px)" }}>
      <div className='mb-16 px-8'>
        <BrandTitle />
      </div>
      <ul className={styles.menu}>
        {menuItems.map((data, i) => (
          <React.Fragment key={i}>
            <MenuItem active={data.to == location.pathname}  {...data} />
          </React.Fragment>
        ))}
      </ul>
      <div className={styles.divider} />
    </div>
  )
}

export default Sidebar