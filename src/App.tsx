import React from 'react';
import './App.css';
import { About } from './components/About';
import { Layout } from './components/Layout';
import { Form } from './containers/Form';

function App() {
  return (
    <div className="App">
      <Layout>
        <About/>
        <Form/>
      </Layout>
    </div>
  );
}

export default App;
