function addNewTask(title) {
	var taskLi = document.createElement('li');
	
	taskLi.classList.add('single-task');
	taskLi.innerHTML = prepareTaskHTML(title);
	
	// Add task to DOM
	tasksContainer.appendChild(taskLi);
}

function prepareTaskHTML(title) {
	return '<div class="input-group">' +
					'<span class="input-group-btn">' +
						'<button class="btn btn-default toggle-complete-btn"><i class="fa fa-check-square"></i></button>' +
					'</span>' +
						
					'<input type="text" class="form-control" placeholdcer="Tytuł zadania..." value="' + title +'">' +
					
					'<span class="input-group-btn">' +
						'<button class="btn btn-danger delete-task-btn"><i class="fa fa-times"></i></button>' +
					'</span>' +
				'</div>' ;
}

//Add new task events

function bindAddTaskEvents() {
	
	// On submit
	newTaskForm.addEventListener('submit', function(event) {
		event.preventDefault();
	
		var title = this.querySelector('input').value;
		
		if (title) {
			addNewTask(tytuł);
		}
		
		
	});
	
}







