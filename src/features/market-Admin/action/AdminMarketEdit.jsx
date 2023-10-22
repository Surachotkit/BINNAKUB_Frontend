import React from 'react'
import del from '../../../img/icon/del.png'
import edit from '../../../img/icon/edit.png'
import { useAuth } from '../../../hooks/use-auth';
import { useState } from 'react';

export default function AdminMarketEdit({setIsModalOpen,coin_list_id, deleteCoin }) {
 



  // const [stockTable, setStockTable] = useState(null)
  const handleClickDelete = () => {
    deleteCoin(coin_list_id)
  }
  const handleClickEdit = (e) => {
    // e.preventDefault()
    // setStockTable(stockTable)
    setIsModalOpen(true)
    // editAddQuantity(coin_list_id)
  }

  return (
    <div className='flex flex-1 gap-4'>
      <img src={edit} alt="edit" className='flex w-5 cursor-pointer' onClick={() => handleClickEdit()} />
      <img src={del} alt="del" className='flex w-5 cursor-pointer' onClick={handleClickDelete}/>
    </div>
  )
}
