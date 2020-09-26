import React from 'react'
import RowContent from './RowContent'
const ColumnContent = ({content: { title, rows }}) => {



  return (
    <>
      	<div className='w-25'>
							<div className='title'>{title}</div>
							<div className='rows'>
		           {rows.map((row, index) => (
								 <RowContent key={index} row={row} />
							 ))}
							</div>
						</div>
    </>
  )
}

export default ColumnContent
