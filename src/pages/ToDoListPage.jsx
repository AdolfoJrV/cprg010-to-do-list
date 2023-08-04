import React, { useState } from "react";
import MainLayout from "../layout/MainLayout.jsx";
import ToDoList from "../components/ToDoList.jsx";
import InputArea from "../components/InputArea.jsx";

const ToDoListPage = () => {
  const [toDoItems, setToDoItems] = useState([]);

  function addItemToList(newItem) {
    setToDoItems((prevItems) => [...prevItems, newItem]);
  }

  function deleteItem(id) {
    setToDoItems((prevItems) => prevItems.filter((_, index) => index !== id));
  }

  return (
    <>
      <MainLayout title="My To-Do-List">
        <InputArea addItemToList={addItemToList} items={toDoItems} />
        <ToDoList items={toDoItems} deleteItem={deleteItem} />
      </MainLayout>
    </>
  );
};

export default ToDoListPage;
