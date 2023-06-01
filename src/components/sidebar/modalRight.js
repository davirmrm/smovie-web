import React, { useRef } from 'react'
import Portal from '../portal/portal'
import useOutsideClick from '../useOusideClick/useoutsideclick'
import './sidebar.scss';

export const modalRight = ({
  Children,
  open = false,
  style = { maxHeight: `calc(100vh - 0px)`, width: '260px', top: `0px` },
  action= ()=> null,
}) => {

  const ref = useRef()
  useOutsideClick(ref, e => {
    if (open) {
      action(e)
    }
  })

  return (
    <Portal name="modal-sidebar">
      <div
        id='box-sidebar-right'
        ref={ref}
        className={open ? 'open-sidebar' : ''}
        style={style}
      >
        {Children}
      </div>
    </Portal>
  )
}
