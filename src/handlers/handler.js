import { validateUserInput } from '../logic/validateInput.js';
import { getTodoList } from '../../API/getTodos.js';
import { postTodo } from '../../API/postTodo.js';
import { displayList } from '../components/displayLi.js';
// import { storage} from "../data.js";

export const addToDoHandler = (userInput) => {
  var userToDo = validateUserInput(userInput);
  if (!userToDo) {
    return;
  }
  postTodo(userInput);
};
getTodoList().then((toDoList) => {
  // storage.array = toDoList;
  displayList(toDoList);
});
