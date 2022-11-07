import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

function App() {
  return (
    <body>
      <Navbar />
      <ItemListContainer subs="Premium" user="Emiliano"/>
      <Footer />
    </body>
  )
}

export default App;
