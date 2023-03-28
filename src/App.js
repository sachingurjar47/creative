
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Landing from './pages/Landing';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <hr />
            <Landing/>
            <hr />
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
