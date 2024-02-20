import React from 'react'
import { useState } from 'react'

function Counter({ initialCount }) {

    const [count, setCount] = useState(initialCount);

    const increamentCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const decreamentCount = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const resetCount = () => {
        setCount(0);
    }

    const switchSignCount = () => {
        setCount((prevCount) => prevCount * -1);
    }

    return (
        <div className='mx-auto w-full text-center pt-5'>
            <div className='text-[20px] font-[700]'>Counter:
                <h3 data-testid="count">{count}</h3>
            </div>
            <div className='flex gap-5 justify-center mt-6'>
                <button onClick={increamentCount} className='text-[14px] font-[500] bg-[maroon] text-white px-5 py-2 rounded-[5px]'>Increament</button>
                <button onClick={decreamentCount} className='text-[14px] font-[500] bg-[maroon] text-white px-5 py-2 rounded-[5px]'>Decreament</button>
                <button onClick={resetCount} className='text-[14px] font-[500] bg-[maroon] text-white px-5 py-2 rounded-[5px]'>Rest</button>
                <button onClick={switchSignCount} className='text-[14px] font-[500] bg-[maroon] text-white px-5 py-2 rounded-[5px]'>Switchsign</button>
            </div>
        </div>
    )
}

export default Counter