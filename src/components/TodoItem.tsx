
import { Link } from 'react-router';

import TodoItemStyles from './TodoItem.module.css';

interface TodoItemProps {
    id: string;
    label: string;
    complete: boolean;

    onRemove(): void;
    onComplete(): void;
}

export const TodoItem = ({ id, label, complete, onRemove, onComplete }: TodoItemProps) => {

    return (
        <li key={id} className={TodoItemStyles.Item} data-complete={complete}>
          <Link to={`/detalhe/${id}`} className={TodoItemStyles.Text}>
            {label}
          </Link>
        <div>
        {!complete && (
          <button onClick={onComplete} className={TodoItemStyles.ButtonComplete}>
            Concluir
          </button>
        )}
        <button onClick={onRemove} className={TodoItemStyles.ButtonRemove}>
          Remover
        </button>
        </div>
      </li>
    );
};