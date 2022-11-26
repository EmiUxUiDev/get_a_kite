import "./App.css";
import Layout from "./components/Layout";
import ItemListContainer from "./components/ItemListContainer";
import def from "./img/Kiteboarding_overview.webp";


const user = {
  id: "0",
  name: "Teacher",
  subs: "Premium",
};

export default function App() {
  return (

      <Layout>
        <div id="espacio" style={{ backgroundImage: `url(${def})` }}></div>
        <ItemListContainer subs={user.subs} user={user.name} />
      </Layout>
    
  );
}
