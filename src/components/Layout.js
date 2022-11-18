import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({children}) {
 
  return (
       <body >
        <Navbar />
          {children}
        <Footer />
    </body>
  )
}

