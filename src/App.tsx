import './App.css';
import SignUpForm from './SignUpForm'; // Assuming SignUpForm.js or SignUpForm.tsx is in the same directory

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>AAK TELE-SCIENCE API - Sign Up Form</h3>
        <SignUpForm apiUrl="https://django-dev.aakscience.com/signup/" />
        <h5>Developed by Jeet Patel</h5>
      </header>
    </div>
  );
}

export default App;