import "./App.css";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import def from "./img/Kiteboarding_overview.webp";


const user = {
  id: "0",
  name: "User",
  year: "2023",
};

export default function App() {
  return (

      <Layout>
        <div id="espacio" style={{ backgroundImage: `url(${def})` }}></div>
        <ItemListContainer year={user.year} user={user.name} />
      </Layout>
    
  );
}
