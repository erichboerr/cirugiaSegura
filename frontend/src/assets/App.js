import InputDataProvider from "./providers/inputDataProvider";
import "./css/App.css";
import Rutas from "./routes/Rutas";

function App() {
  return (
    <div className="App">
      <InputDataProvider>
        <Rutas />
      </InputDataProvider>
    </div>
  );
}

export default App;
