import Header from './components/layout/Header';
import Auth from './context/Auth';
import TodoProvider from './context/TodoProvider';
import Home from './page/home/Home';

function App() {
  return (
    <>
      <Auth>
        <TodoProvider>
          <Header />
          <main className="containers">
            <Home />
          </main>
        </TodoProvider>
      </Auth>
    </>
  );
}

export default App;
