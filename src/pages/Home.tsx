import { useEffect, useState } from "react";

import { TodoAPI, type ITodo } from "../shared/services/api/TodoAPI";
import { TodoItem } from "../components/TodoItem";
import { InputAdd } from "../components/InputAdd";
import { List } from "../components/List";
import { PageLayout } from "../shared/layout/page-layout/pageLayout";



export const Home = () => {

  const [list, setList] = useState<ITodo[]>([]);

  
  useEffect(() => {
    TodoAPI.getAll()
      .then(data => setList(data));
  }, []);

 const handleAdd = (value: string) => {
    TodoAPI.create({label: value, complete: false})
      .then(data => setList([...list, data]));
  }

 const handleRemove = (id: string) => {
    TodoAPI.deleteById(id)
      .then(() => {
        setList([
          ...list.filter(item => item.id !== id)
        ]);
      });
 }

 const handleComplete = (id: string) => {
    TodoAPI.updateById(id, {complete: true})
      .then(() => {
        setList([
          ...list.map(item => ({
            ...item,
            complete: item.id === id ? true : item.complete
          }))
        ]);
      });
 }


  return (
    <PageLayout title = 'Página Inicial'>
      <InputAdd onAdd={handleAdd} />

      <List>
        {list.map(listItem => (
          <TodoItem
            id={listItem.id}
            label={listItem.label}
            complete={listItem.complete}
            onComplete={() => handleComplete(listItem.id)}
            onRemove={() => handleRemove(listItem.id)}
        />
        ))}
      </List>
    </PageLayout>
  )
}