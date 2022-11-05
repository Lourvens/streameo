import React from 'react'
import BrandTitle from '@/common/brandTitle'
import { BiMenu } from 'react-icons/bi'

const styles = {
  container: 'fixed top-0 z-50 w-full h-16 flex items-center justify-between px-4 py-2 bg-primary-900 bg-opacity-60 lg:hidden',
  menuBtn: 'p-1 border-2 rounded-lg border-transparent focus:border-blue-500'
}
function Navbar() {
  return (
    <div className={styles.container} style={{ backdropFilter: "blur(10px)" }}>
      <BrandTitle />
      <button 
       className={styles.menuBtn}
       data-hs-overlay="#docs-sidebar"
       aria-controls="docs-sidebar"
       aria-label="toggle navigation"
       type="button"
      >
        <BiMenu size={28} />
      </button>
    </div>
  )
}

export default Navbar