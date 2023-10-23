import React from 'react'
import del from '../../../img/icon/del.png'
import edit from '../../../img/icon/edit.png'


export default function AdminMarketEdit({setIsModalOpen,coin_list_id, deleteCoin }) {
 
  const handleClickDelete = () => {
    deleteCoin(coin_list_id)
  }
  const handleClickEdit = (e) => {
    setIsModalOpen(true)
  }

  return (
    <div className='flex flex-1 gap-4'>
      <img src={edit} alt="edit" className='flex w-5 cursor-pointer' onClick={() => handleClickEdit()} />
      <img src={del} alt="del" className='flex w-5 cursor-pointer' onClick={handleClickDelete}/>
    </div>
  )
}
