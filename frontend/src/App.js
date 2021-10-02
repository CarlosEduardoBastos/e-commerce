import Routes from "./Routes";
import Header from "./components/Header";
import Provider from "./context/ProdutosContext";

function App() {
  return (
    <Provider>
      <Header />
      <Routes />
    </Provider>
  );
}

export default App;
