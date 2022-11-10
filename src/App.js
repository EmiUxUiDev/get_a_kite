import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

const user = {
  id: "0",
  name: "Teacher",
  subs: "Premium"
}

function App() {
  return (
    <body>
      <Navbar />
      <ItemListContainer subs={user.subs} user={user.name}/>
      <Footer />
    </body>
  )
}

export default App;
