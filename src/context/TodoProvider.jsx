import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import app from '../firebase';

import todoContext from './todoContext';

// custom hook
// eslint-disable-next-line react-refresh/only-export-components
export const useToDoContext = () => {
  return useContext(todoContext);
};

//provider
const TodoProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  //get local user
  const [localUser] = useState(() => {
    const stroed = localStorage.getItem('authUser');
    return stroed ? JSON.parse(stroed) : null;
  });
  const [addTodo, setAddTodo] = useState([]);
  const db = getFirestore(app);

  /*  When merging DB data with local state on reload,
   use array spread [...] not object spread {...}
   because {...array} converts it into an object instead of keeping it as an array */
  useEffect(() => {
    //
    if (!localUser) return;

    const db = getFirestore(app);
    const getTodo = async () => {
      try {
        setError(false);
        setLoading(true);
        const snapshot = await getDocs(
          collection(db, 'users', localUser.uid, 'todos'),
        );
        const todos = snapshot.docs.map(item => ({
          id: item.id,
          ...item.data(),
        }));
        setAddTodo(todos.reverse());
        setLoading(false);
      } catch (er) {
        console.log(er);
        setError(true);
      }
    };
    getTodo();
  }, [localUser]);

  // submit
  const submitToDo = async (e, adTask, adTaskDetail) => {
    e.preventDefault();

    // get time
    const date = new Date().toLocaleString('en-BN', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    // add new todo
    const newToDo = {
      title: adTask,
      description: adTaskDetail,
      completed: false,
      createDate: date,
    };

    const docRef = await addDoc(
      collection(db, 'users', localUser.uid, 'todos'),
      newToDo,
    );

    setAddTodo(prev => {
      return [{ id: docRef.id, ...newToDo }, ...prev];
    });
  };

  //toggleComplete
  const toggleComplete = async Titem => {
    setAddTodo(() => {
      return addTodo.map(item =>
        item.id === Titem.id ? { ...item, completed: !Titem.completed } : item,
      );
    });
    await updateDoc(doc(db, 'users', localUser.uid, 'todos', Titem.id), {
      completed: !Titem.completed,
    });
  };

  // updateTodo
  const updateTodo = async (state, editVal) => {
    setAddTodo(() => {
      return addTodo.map(item =>
        item.id === state.id ? { ...item, description: editVal } : item,
      );
    });

    await updateDoc(doc(db, 'users', localUser.uid, 'todos', state.id), {
      description: editVal,
    });
  };

  // delete Todo
  const deleteTodo = async Id => {
    setAddTodo(() => {
      return addTodo.filter(Iitem => Iitem.id !== Id);
    });
    await deleteDoc(doc(db, 'users', localUser.uid, 'todos', Id));
  };

  // deleteAllToDo
  const deleteAllToDo = async () => {
    setAddTodo([]);

    const dLTITM = addTodo.map(Item => {
      return deleteDoc(doc(db, 'users', localUser.uid, 'todos', Item.id));
    });
    await Promise.all(dLTITM);
  };

  const value = {
    error,
    loading,
    addTodo,
    submitToDo,
    toggleComplete,
    deleteTodo,
    deleteAllToDo,
    updateTodo,
    localUser,
  };

  // console.log(addTodo)
  return (
    <>
      <todoContext.Provider value={value}>{children}</todoContext.Provider>
    </>
  );
};

export default TodoProvider;
