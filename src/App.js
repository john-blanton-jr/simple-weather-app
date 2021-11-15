// styles
import './App.css';
import Display from './components/Display';

// components
// import Search from './components/Search';
function App() {
  let currentTime = new Date().getHours();
  
 

  return (
    <div className={(7 <= currentTime && currentTime < 20)  ? 'app bg' : 'app bg night'}>
        <main>
          <Display />
          
        </main>
    </div>
  );
}

export default App;
