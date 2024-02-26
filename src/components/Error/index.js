import React from 'react'

function Error({e}) {
  return (
    <div className='flex justify-center'><p className="p-4 rounded bg-red-600 text-gray-100 w-fit">Error: {e.toString()}</p></div>
  )
}

export default Error