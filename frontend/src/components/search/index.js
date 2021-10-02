import React from "react";
import { Search } from "./styled";
import loupe from "../../img/loupe.png";
import { AppContext } from "../../context/ProdutosContext";
const SearchComponents = () => {
  const { busca, setBusca } = React.useContext(AppContext);
  const [ativar, setAtivar] = React.useState(false);

  function handleChange({ target }) {
    setBusca(target.value);
  }
  function handleClick() {
    setAtivar(!ativar);
  }
  return (
    <Search>
      {ativar && <input type="text" value={busca} onChange={handleChange} />}
      <img src={loupe} onClick={handleClick} />
    </Search>
  );
};

export default SearchComponents;
