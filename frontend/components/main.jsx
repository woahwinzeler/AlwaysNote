import React from 'react'
import NotebookIndexContainer from './notebooks/notebook_index_container';
import { Route } from 'react-router-dom';



const Main = () => (
  <div className="main">
    <Route path="/home/notebooks" component={NotebookIndexContainer}/>
  </div>
)

export default Main;