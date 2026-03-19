// Bijli Bill
let arrRecentPaid = []
function bijliBill(totalUnits,currentUnits){

    let perUnit = 7

    if(totalUnits <= 0){
       let currentTotalBijliCost = currentUnits * perUnit;
        arrRecentPaid.push(
        {
            amount: currentTotalBijliCost,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          }
       )
       return `your first bill of electricity is ${currentTotalBijliCost} Rupess`
    }
    if(totalUnits > 0){
        

            let currentTotalBijliCost = (currentUnits-totalUnits) * perUnit
            if(arrRecentPaid.length === 0){
                arrRecentPaid.push({
                    amount:currentTotalBijliCost,
                    date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString()
                })
                return `Your date of today of electricity bill generated of units ${currentUnits - totalUnits} is amount :${ currentTotalBijliCost} Rupess`
            }
        }else{
            let prevAmount = arrRecentPaid[arrRecentPaid.length-1].amount
            // let currentTotalBijliCost = (currentUnits - totalUnits) * perUnit + prevAmount
            let totalCost = prevAmount + currentTotalBijliCost;
            arrRecentPaid.push({
                amount: totalCost,
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString()
            });
            // return `Your recently unpaid of amount of bill is ${prevAmount} and current date of bill added and total bill of cost is ${currentTotalBijliCost}`
            return `Previous unpaid: ₹${prevAmount}, Current: ₹${currentTotalBijliCost}, Total: ₹${totalCost}`;
        
        }

    }
   



console.log(bijliBill(500, 560));