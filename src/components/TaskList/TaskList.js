import React from 'react'
import TaskItem from './TaskItem.js'

export default function TaskList( {tasks, delTask} ) {
  return (
	<ul className='TaskList'>
	{
		tasks.map( item => (
			<TaskItem key={item.id} item={item} delTask={delTask} />
			)
		)
	}
	</ul>
  )
}
