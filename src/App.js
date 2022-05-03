import './App.css';
import { TodoList } from './components/Todo';
import  UpdateContetxtProvider  from './context/UpdateContext'

function App() {
  return (
    <UpdateContetxtProvider>
      <TodoList />
    </UpdateContetxtProvider>
  );
}

export default App;
