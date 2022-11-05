
const styles: Record<any, string> = {
  container: 'w-full h-[560px] relative flex items-end pb-20 mb-8',
  absoluteEl: 'w-full h-full top-0 left-0 absolute pointer-events-none ',
  content: 'relative z-10 px-4 md:px-8 lg:px-12 w-full max-w-lg',
  row: 'flex items-center font-medium mb-4 gap-x-4',
  icon: 'flex items-center gap-x-1 text-yellow-300 text-xl',
  list: 'inline-flex items-center gap-x-2 text-sm text-gray-400 px-4 py-2 rounded-lg bg-slate-900 bg-opacity-25 overflow-hidden max-w-[290px]',
  title: 'text-blue-100 text-xl uppercase font-title font-semibold tracking-widest',
  overview: 'text-slate-200  mt-2 text-sm',
  separator: 'h-6 w-0.5 bg-slate-100',
  btnGroup: 'mt-4 flex gap-x-6',
  inheritBtn: 'uppercase py-3 px-4 inline-flex justify-center items-center gap-2 rounded-full border border-transparent font-semibold focus:outline-none focus:ring-2 text-white transition-all text-sm',
}

styles.addBtn = styles.inheritBtn + ' bg-slate-700 hover:bg-slate-500 focus:ring-slate-500'
styles.btn = styles.inheritBtn + ' bg-red-600 hover:bg-red-700 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-gray-800'
styles.gradientEffect = styles.absoluteEl + 'bg-gradient-to-t  from-slate-900'
styles.img = styles.absoluteEl + 'object-cover'

export default styles