import React from 'react'
import NotebookIndex from '../notebooks/notebook_index';
import TagsIndexContainer from '../tags/tags_index_container';

class Home extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <NotebookIndex /> 
        <TagsIndexContainer />
      </div>
    )
  }
}

export default Home; 