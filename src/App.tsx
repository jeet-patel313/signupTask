import './App.css';
import SignUpForm from './components/SignUpForm';
import { apiUrl } from './constants/apiUrls';

function App() {
  return (
    <div className="App">
      <header>
        <h3>AAK TELE-SCIENCE API - Sign Up Form</h3>
      </header>
      <main>
        <SignUpForm apiUrl={apiUrl} /> 
      </main>
      <footer>
        <h5>Developed by Jeet Patel</h5>
      </footer>
    </div>
  );
}

export default App;