import React from 'react'
import del from '../../../img/icon/del.png'
import edit from '../../../img/icon/edit.png'
import { useAuth } from '../../../hooks/use-auth';

export default function AdminMarketEdit({amount,coin_list_id, deleteCoin}) {
  const { isOpenAddQuantity, setIsOpenAddQuantity } = useAuth();

  const handleClickDelete = () => {
    deleteCoin(coin_list_id)
  }

  return (
    <div className='flex gap-4'>
      <img src={edit} alt="edit" className='flex w-5 cursor-pointer' onClick={() => setIsOpenAddQuantity(true)} />
      <img src={del} alt="del" className='flex w-5 cursor-pointer' onClick={handleClickDelete}/>
    </div>
  )
}
