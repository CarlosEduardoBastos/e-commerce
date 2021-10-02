import React from "react";

export const AppContext = React.createContext();

const Provider = (props) => {
  const [cart, setCart] = React.useState([]);
  const [dados, setDados] = React.useState([]);
  const [busca, setBusca] = React.useState("");

  React.useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch("http://localhost:5000/promotions");
        const json = await res.json();
        setDados(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchApi();
  }, []);
  const dadosFiltrados = dados.filter(({ name }) => name.includes(busca));
  return (
    <AppContext.Provider
      value={{ cart, setCart, dadosFiltrados, busca, setBusca }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Provider;
