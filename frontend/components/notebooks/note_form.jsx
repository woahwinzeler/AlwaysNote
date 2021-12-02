import React from 'react'

class NoteForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      title: "",
      notebook_id: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({notebook_id: this.props.notebookId}, () => this.props.createNote(this.state))
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" name="note[title]" onChange={this.update("title")} />
        </label>
        <input type="submit"/>
      </form>
    )
  }
}

export default NoteForm;