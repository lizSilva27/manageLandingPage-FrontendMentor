import React from 'react'

function BtnStarted({ style, txtBtn, onClick }) {
  return (
    <button className={`rounded-full cursor-pointer text-sm font-bold ${style}`} onClick={onClick}>{txtBtn}</button>
  )
}

export { BtnStarted }