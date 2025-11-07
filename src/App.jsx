import './App.css'
import About from './assets/Components/About/About'
import Ad from './assets/Components/Ad/Ad'
import Dishes from './assets/Components/Dishes/Dishes'
import Footer from './assets/Components/Footer/Footer'
import Header from './assets/Components/Header/Header'
import Menu from './assets/Components/Menu/Menu'
import Nav from './assets/Components/Nav/Nav'
import Team from './assets/Components/Team/Team'

function App() {
  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Menu/>
      <Dishes/>
      <Team/>
      <Ad/>
      <Footer/>
    </>
  )
}

export default App
