import Nav from './components/Nav'
import Header from './components/Header';
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'

const App = () => {
    return (
        <div className="bg-black">
            <Nav />
            <Header />
            <Home />
            <About />
            <Projects />
            <Contact />
            <div className="h-[1000px]"></div>
        </div>
    )
}

export default App
