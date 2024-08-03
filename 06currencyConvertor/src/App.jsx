import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'


function App() {
  const [amount ,setamount]=useState(0)
  const [from,setfrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currecyInfo=useCurrencyinfo(from)

  const options=Object.keys(currecyInfo)

  const swap=()=>{
      setfrom(to)
      setTo(from)
      setConvertedAmount(amount)
      setamount(setConvertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currecyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/818517624/photo/world-currency-exchange-table-graph.jpg?s=612x612&w=0&k=20&c=KD_P5_XoOwpAQhBYa4nBqYAPceFXNzxxr25ZREKz9VQ=')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            onCurrencyOptions={options}
                            onCurrencyChange={(currency)=>
                            setamount(amount)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>
                            setamount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="to"
                            amount={convertedAmount}
                            onCurrencyOptions={options}
                            onCurrencyChange={(currency)=>
                            setTo(currency)}
                            selectCurrency={from}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
