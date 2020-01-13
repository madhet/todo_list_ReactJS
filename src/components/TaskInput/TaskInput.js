import React from "react";

export default function TaskInput({
	inputEnter,
	spanAddClick,
	setInputTodoRef
}) {
	return (
		<div>
			<input
				type="text"
				placeholder="Input task"
				className="inputTask"
				onKeyDown={event => inputEnter(event)}
				ref={setInputTodoRef}
			/>
			<span className="addTask" onClick={() => spanAddClick()}>
				+
			</span>
		</div>
	);
}
