import React from 'react'
import del from '../../../img/icon/del.png'
import edit from '../../../img/icon/edit.png'

export default function AdminMarketEdit() {
  return (
    <div className='flex gap-4'>
      <img src={edit} alt="edit" className='flex w-5 cursor-pointer' />
      <img src={del} alt="del" className='flex w-5 cursor-pointer'/>
    </div>
  )
}
