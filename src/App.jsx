import Header from './components/layout/Header';
import Auth from './context/Auth';
import Home from './page/home/Home';

function App() {
  return (
    <>
      <Auth>
        <Header />
        <main className="containers">
          <Home />
        </main>
      </Auth>
    </>
  );
}

export default App;
