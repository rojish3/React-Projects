// import Header from './components/Header';
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'

const App = () => {
    return (
        <div className="bg-black">
            <Nav />
            <Home />
            <About />
            {/* <Header /> */}
            <Projects />
            <Contact />
            <div className="h-[1000px]"></div>
        </div>
    )
}

export default App
