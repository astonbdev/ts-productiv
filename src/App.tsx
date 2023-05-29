import TodoApp from './TodoApp'
import './App.css'
import "bootstrap/dist/css/bootstrap.css";

/**
 * 
 * renders TodoApp
 */
function App() {

  return (
    <main className="App">
      <header className="container-fluid pt-4 pb-1">
        <div className="container">
          <h1>Prøductïv</h1>
          <p className="lead">The best name in todo list management.</p>
        </div>
      </header>

      <section className="container mt-4">
        <TodoApp />
      </section>
    </main>
  );
}

export default App
