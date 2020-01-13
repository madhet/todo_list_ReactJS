import React, { Component } from "react";
import TaskInput from "./components/TaskInput/TaskInput.js";
import TaskList from "./components/TaskList/TaskList.js";
import "./style.css";

export default class App extends Component {
	state = {
		tasks: [
			{
				id: 1,
				title: "Task_1"
			},
			{
				id: 2,
				title: "Task_2"
			},
			{
				id: 3,
				title: "Task_3"
			}
		],
		inputValue: ""
	};

	inputTodo = null;

	setInputTodoRef = input => (this.inputTodo = input);

	inputOnChange = event => this.setState({ inputValue: event.target.value });

	inputEnter = event => {
		if (event.keyCode === 13 && event.target.value) {
			this.addTask(event.target.value);
			event.target.value = "";
		}
	};

	spanAddClick = () => {
		let input = document.querySelector(".inputTask");
		if (input.value) {
			this.addTask(input.value);
			input.value = "";
		}
	};

	addTask = title => {
		let newTasks = this.state.tasks.slice();
		let id = newTasks.length ? newTasks[newTasks.length - 1].id + 1 : 1;
		newTasks.push({ id, title });
		this.setState({ tasks: newTasks });
	};

	delTask = id => {
		let newTasks = this.state.tasks.filter(item => item.id !== id);
		this.setState({ tasks: newTasks });
	};

	render() {
		return (
			<div className="App">
				<TaskInput
					inputEnter={this.inputEnter}
					spanAddClick={this.spanAddClick}
					setInputTodoRef={this.setInputTodoRef}
				/>
				<TaskList tasks={this.state.tasks} delTask={this.delTask} />
			</div>
		);
	}
}
