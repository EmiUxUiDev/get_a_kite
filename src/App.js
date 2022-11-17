import './App.css';
import Layout from "./components/Layout"
import ItemListContainer from "./components/ItemListContainer"


const user = {
  id: "0",
  name: "Teacher",
  subs: "Premium"
}

function App() {
  return (
    
      <Layout>
          <ItemListContainer subs={user.subs} user={user.name}/> 
      </Layout>
  )
}

export default App;
