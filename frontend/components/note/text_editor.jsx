import React from 'react'
import ReactQuill from "react-quill"
import "./quill.snow.css";


class TextEditor extends React.Component{
  constructor(props){
    super(props)

    this.modules = {
      toolbar: [
        [{header: "1"}, {header: "2"}, {header: [3,4,5,6]}, {font: []}],
        [{size: []}],
        ["bold", "italic", "underline", "stirke", "blockquote"],
        [{list: "ordered"}, {list: "bullet"}],
        ["link", "image", "video"],
        ["clean"],
        ["code-block"],
      ],
    };

    this.formats = [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "link",
      "image",
      "video",
      "code-block"
    ]

    if (!!this.props.note){
      this.state = this.props.note 
    } else {
      this.state = {
        note: {
          id: this.props.noteId, 
          title: "Scratchpad",
          body: "",
          notebook_id: this.props.notebookId
        },
        editTitle: false,
      }
    }

    this.handleBody = this.handleBody.bind(this)
    this.handleTitleSubmit = this.handleTitleSubmit.bind(this)
    this.userEditCount = 0;
  }


  componentDidUpdate(prevProps){
    if(typeof this.props.note !== 'undefined'){
      if(typeof this.props.note.id !== 'undefined'){
        if(Number.isInteger(this.props.note.id) && typeof prevProps.note === 'undefined'){
          this.setState({note: this.props.note})
          console.log("hit top")
        } else if (typeof prevProps.note.id !== 'undefined' && this.props.note.id !==  prevProps.note.id){
          this.setState({note: this.props.note})
          console.log(this.props.note)
        }
      }
    }
  }

  handleBody(e){
    this.userEditCount += 1; 
    this.setState({note: {
      id: this.props.note.id, 
      title: this.props.note.title,
      body: e,
      notebook_id: this.props.note.notebook_id
    }}, () => {
      if (this.userEditCount % 10 === 0){
        this.props.updateNote(this.state.note)
      }
    })
  }

  update(field) {
    return e => this.setState({note: {...this.state.note, [field]: e.currentTarget.value}});
  }

  handleTitleSubmit(){
    this.props.updateNote(this.state.note)
    this.setState({editTitle: !this.state.editTitle})
  }

  render(){
    let body;
    this.title = this.state.note.title
    if (this.state.note.body === undefined){
      body = ''
    } else {
      console.log(this.state.note.body)
      body = this.state.note.body 
    }
    let screen; 
    let button;
    if(this.state.editTitle){
      screen = <div className="transparent-modal-screen" onClick={this.handleTitleSubmit}> </div>
      button = <button onClick={this.handleTitleSubmit}> Change Title</button>
    }
    let title = this.state.editTitle ?  <textarea type="text" name="title" onChange={this.update('title')} value={this.state.note.title} className="title-input"/> : 
      <h2 onDoubleClick={() => this.setState({editTitle: !this.state.editTitle})}>{this.title}</h2>
    return (
      <>
      <div className="text-editor-container">
        {title}
        {button}
        <ReactQuill 
          placeholder="Start note here..."
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleBody}
          value={body}
        />
      </div>
      </>
    )
  }
}

export default TextEditor; 