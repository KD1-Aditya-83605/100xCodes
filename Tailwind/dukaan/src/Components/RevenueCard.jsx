export const RevenueCard =  ({
    title,
    orderCount,
    amount,

})=>  {

   return <div className="bg-white rounded shadow-md p-4">
    <div>
        {title}
        
    </div>
    <div>
        <div className="flex justify-between">
            $ {amount}
        </div>

        {orderCount ? <div className="flex">
            <div>
                
            {orderCount} order(s)
                </div> 
        
        </div> : null
        }
    </div>



   </div>

}