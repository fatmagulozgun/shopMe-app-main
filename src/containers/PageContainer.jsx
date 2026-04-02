import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className='mx-auto w-[92%] max-w-[1280px]'>
        {children}
    </div>
  )
}

export default PageContainer
