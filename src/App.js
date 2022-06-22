import { Login } from './ui/components/login/login';

function App() {
  return (
    <div className="App">
      <Login isLoading={false} errors={false} label="Enviar"/>
    </div>
  );
}

export default App;
