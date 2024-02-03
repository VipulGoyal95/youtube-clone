import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonVideo = () => {
  return (
    <div style={{width: '95%',margin: '10px'}}>
      <SkeletonTheme baseColor='#343a40' highlightColor='#3c4147'>
      <Skeleton height={180} />
      <div style={{display:'flex',flexDirection:'row',margin:'3px 0'}}>
        <Skeleton style={{margin:'6px 7px'}} circle width={40} height={40}/>
        <Skeleton width={320} height={40}/>
      </div>
      </SkeletonTheme>
    </div>
  )
}

export default SkeletonVideo;
