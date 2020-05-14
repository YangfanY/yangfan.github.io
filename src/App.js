import React from 'react';
import './App.css';
import Head from './component/Head/Head';
import Body from './component/Search/index';
import JobList from './component/Job/index';
class App extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Head />
        <Body/>
        <JobList/>
      </div>
    )
  }
}

export default App;
