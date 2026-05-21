import { Outlet } from 'react-router';
import Header from './components/layout/Header';
import Auth from './context/Auth';
import TodoProvider from './context/TodoProvider';

function App() {
  return (
    <>
      <Auth>
        <TodoProvider>
          <Header />
          <main className="containers">
            <Outlet />
          </main>
        </TodoProvider>
      </Auth>
    </>
  );
}

export default App;
