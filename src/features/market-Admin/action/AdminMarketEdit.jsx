import React from 'react'
import del from '../../../img/icon/del.png'
import edit from '../../../img/icon/edit.png'
import { useAuth } from '../../../hooks/use-auth';

export default function AdminMarketEdit() {
  const { isOpenAddQuantity, setIsOpenAddQuantity } = useAuth();
  return (
    <div className='flex gap-4'>
      {/* <img src={edit} alt="edit" className='flex w-5 cursor-pointer' onClick={() => setIsOpenAddQuantity(true)} /> */}
      <img src={edit} alt="edit" className='flex w-5 cursor-pointer'  />
      <img src={del} alt="del" className='flex w-5 cursor-pointer'/>
    </div>
  )
}
