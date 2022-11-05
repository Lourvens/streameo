import React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  btn: 'py-2 px-8  gap-4 inline-flex items-center',
  listItem: (isActive: boolean) => `
    border-l-4 border-transparent transition-all font-semibold capitalize text-slate-400
    hover:text-blue-200 cursor-pointer
    ${isActive ? `border-blue-400 text-blue-400 hover:text-blue-400` : null}
  `
}
function MenuItem({ title, path, active, to } : Props) {

  return (
    <li className={styles.listItem(active)}>
      <Link to={to} className={styles.btn}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        strokeWidth={active ? 0 : 1.5}
        stroke="currentColor"
        className="w-5 h-5"
        > 
          {path}
        </svg>
        <span>
          {title}
        </span>
      </Link>
    </li>
  )
}

export default MenuItem

interface Props {
  title: string
  path: JSX.Element
  active: boolean
  to: string
}

interface BtnProps {
  $isActive: boolean
}