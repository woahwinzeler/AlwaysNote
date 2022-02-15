import React from "react"


class NotebookForm extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      title: "",
      description: "",
      author_id: this.props.currentUserId
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNotebook(this.state)
  }

  render(){

    return(
      <form onSubmit={this.handleSubmit} className="form">
        <h3> Create a New Notebook </h3>
        <label className="label">
          Title 
          <input type="text" name="notebook[title]" onChange={this.update('title')} value={this.state.title}/>
        </label>
        <label className="label">
          Description
          <input type="text" name="notebook[description]" onChange={this.update('description')} value={this.state.description}/>
        </label>
        <label htmlFor="Create"></label>
        <input className="session-form-continue" type="submit" value="Create"/>
    </form>
    )
  }
}

export default NotebookForm; 
