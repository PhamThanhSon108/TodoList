import TodoList from "./components/TodoList";
import TextField from '@atlaskit/textfield';
import Button from "@atlaskit/button";
import Icon from "@atlaskit/icon";
import { v4 } from 'uuid';
import { useCallback, useState } from "react";
function App() {
  const [todoList,setTodoList] = useState([]);
  const [textInput,setTextInput] = useState('');
  const onTextInputChange = useCallback((e) =>{
    setTextInput(e.target.value)
  } ,[]);
  const onAddBtnClick = useCallback((e) => {
    setTodoList([{id:v4,name:textInput,isCompleted: false},...todoList]);
    setTextInput("");
  },[textInput,todoList]);
   
  return (
<>
  <h3>Danh sách cần làm</h3>
   <TextField name='add-todo' placeholder="Thêm việc" elemAfterInput={
     <Button isDisabled={!textInput} appearance="primary" onClick={onAddBtnClick}>Thêm</Button>
   }
   css={{padding: "2px 4px 2px"}}
   value={textInput}
   onChange={onTextInputChange}
   ></TextField>
   <TodoList todoList={todoList} />
</>
  
  );
}

export default App;
