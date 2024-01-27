import './App.css';
import PostComponent from './PostComponents/PostsComponent';

function App() {
  return (
    <div >
     <div className='header'>
      <h1>PostItem</h1>
     </div>
     <div className='box'>
      <PostComponent />
     </div>
    </div>
  );
}

export default App;
