import React from "react";

export const AppContext = React.createContext();

const Provider = (props) => {
  const [cart, setCart] = React.useState([]);
  const [dados, setDados] = React.useState([]);
  const [busca, setBusca] = React.useState("");
  const [quantidade, setQuantidade] = React.useState(0);

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
  let buscaLowe = busca.toLocaleLowerCase();
  let buscaStr = buscaLowe;
  const dadosFiltrados = dados.filter(({ name }) =>
    name.includes(buscaStr.charAt(0).toUpperCase() + buscaStr.substr(1))
  );
  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        dadosFiltrados,
        busca,
        setBusca,
        quantidade,
        setQuantidade,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Provider;
