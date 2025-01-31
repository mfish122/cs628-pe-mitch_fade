Input:

Task Description:

A text input field where the user adds a task. The user clicks the "add task" button to add a new task.

Process:
When the user interacts with the application, the following processes occur:

Adding a Task:

the text of the new task is stored in the applications state and then dynamically rendered 
along with the "delete" button

Deleting a Task:

The user can click the "delete" button that removes the data from the list in 
the applications state and the UI is re-rendered to show this change. 

State Management:

The useState hook is used to manage the list of tasks and the task input. The task list 
is dynamically updated based on changes made by the user. 

Output:

List of Tasks:

The list of tasks displayed as seperate items along with the "Delete" button 

Updated UI:

The UI updates in real time as tasks are added or deleted. 
