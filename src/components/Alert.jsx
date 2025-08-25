import React from 'react'

export default function Alert({ type = 'info', children, role='status' }){
  const cls = `alert ${type === 'warn' ? 'warn' : type}`
  return <div className={cls} role={role} aria-live="polite">{children}</div>
}
