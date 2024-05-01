import './App.css';
import SignUpForm from './components/SignUpForm'; // Assuming SignUpForm.js or SignUpForm.tsx is in the same directory

function App() {
  return (
    <div className="App">
      <header>
        <h3>AAK TELE-SCIENCE API - Sign Up Form</h3>
      </header>
      <main>
        <SignUpForm apiUrl="https://django-dev.aakscience.com/signup/" />
      </main>
      <footer>
        <h5>Developed by Jeet Patel</h5>
      </footer>
    </div>
  );
}

export default App;