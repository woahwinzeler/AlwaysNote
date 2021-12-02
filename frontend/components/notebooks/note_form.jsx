import React from 'react'

class NoteForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      title: "",
      notebook_id: 
    }
  }
  
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNotebook(this.state)
  }
  render(){

  }
}

export default NoteForm;