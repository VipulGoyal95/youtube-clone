import React from 'react'
import HistoryVideo from '../../components/historyVideo/HistoryVideo'

const Historyscreen = () => {
  return (
    <div>
      {[...Array(20)].map(()=>
        <HistoryVideo/>
      )}
    </div>
  )
}

export default Historyscreen
