import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BookList } from './BookList';
import { Title } from './Title';

function App() {
  return (
    <div>
      <Title />
      <BookList />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
