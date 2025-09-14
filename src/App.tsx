import { useState, useEffect} from 'react';

import { TodoAPI } from './shared/services/api/TodoAPI';
import { InputAdd } from './components/InputAdd';
import { TodoItem } from './components/TodoItem';
import { List } from './components/List';

export function App() {

  const [list, setList] = useState([
    {id: '1', label: 'Fazer café', complete: false},
    {id: '2', label: 'Fazer café', complete: false},
    {id: '3', label: 'Fazer almoço', complete: false},
    {id: '4', label: 'Fazer jantar', complete: false},
  ]);

  
  useEffect(() => {
    TodoAPI.getAll()
      .then(data => setList(data));
  }, []);

 const handleAdd = (value: string) => {
  setList([
    ...list, 
    {id: (list.length + 1).toString(), complete: false, label: value}
  ]);
  }

 const handleRemove = (id: string) => {
  setList([
    ...list.filter(item => item.id !== id),
  ])
 }

 const handleComplete = (id: string) => {
  setList([
    ...list.map(item => ({
      ...item, 
      complete: item.id === id ? true : item.complete
    }))
  ]);
 }


  return (
    <div>
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
    </div>
  )
}