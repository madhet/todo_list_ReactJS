import React from 'react'

export default function TaskItem( {item, delTask} ) {
  return (
		<li className='TaskItem'>
			{item.title}
			<span onClick={() => delTask(item.id)}>X</span>	
		</li>
  )
}
