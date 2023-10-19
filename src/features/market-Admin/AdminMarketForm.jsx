import React from 'react'
import MarketContent from '../market/MarketContent'
import MarketMenu from '../market/MarketMenu'
import AdminMarketItem from './AdminMarketItem'
import AdminMarketMenu from './AdminMarketMenu'

export default function AdminMarketForm() {
  return (
    <div className="flex flex-col gap-4">
      {/* {isOpenBuy && (
        <Modal >
          <PaymentBuy />
        </Modal>
      )}

      {isOpenSell && (
        <Modal >
          <PaymentSell/>
        </Modal>
      )} */}
    
      <div className="flex justify-center items-center">
        <MarketContent />
      </div>
      <div className="flex justify-center items-center">
        <AdminMarketMenu />
      </div>

      <div className="flex flex-col justify-center items-center">
        
        <AdminMarketItem />
        <AdminMarketItem />
        <AdminMarketItem />
        <AdminMarketItem />


      </div>
    </div>
  )
}
