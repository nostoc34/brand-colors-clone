import "./App.css";
import MainContext from "./MainContext";
import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import BrandsData from "./brands.json";
import Copied from "./components/Copied";

function App() {
  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1000)
    return () => {
      clearTimeout(timeout);
    }
  }, [copied]);

  useEffect(() => {
    setBrands(brandsArray.filter(brand => brand.title.toLowerCase().includes(search.toLowerCase())))
  }, [search])

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  };

  return (
    <>
      <MainContext.Provider value={data}>
        <Sidebar />
        <Content />
        {copied && <Copied color={copied} />}
      </MainContext.Provider>
    </>
  );
}

export default App;
