import React, { useCallback } from 'react';
// import { connect } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos'; 
import Todos from '../components/Todos';
import { useSelector, useDispatch } from 'react-redux';

const TodosContainer = () => {
    const { input, todos } = useSelector(({todos}) => ({
        input: todos.input,
        todos: todos.todos
    }));
    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)),[dispatch])
    const onInsert = useCallback(text => dispatch(insert(text)),[dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id), [dispatch]));
    const onRemove = useCallback(id => dispatch(remove(id), [dispatch]));
    return (
        <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
        />
    );
};

export default TodosContainer;
// export default connect(
//     // 비구조화 할당을 통해 todos를 분리하여 
//     // state.todos.input 대신 todos.input을 사용 
//     ({todos}) => ({
//         input: todos.input,
//         todos: todos.todos,
//     }), 
//     {
//         changeInput,
//         insert,
//         toggle,
//         remove
//     },
// )(TodosContainer);