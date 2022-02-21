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
        } else if (typeof prevProps.note.id !== 'undefined' && this.props.note.id !==  prevProps.note.id){
          this.setState({note: this.props.note})
        }
      }
    }
  }

  handleBody(e){
    this.userEditCount += 1; 
    if(!!this.props.noteToOpen){
      this.setState({note: {
        id: this.props.notes[this.props.noteToOpen].id, 
        title: this.props.notes[this.props.noteToOpen].title,
        body: e,
        notebook_id: this.props.notes[this.props.noteToOpen].notebook_id
      }}, () => {
        if (this.userEditCount % 2 === 0 && !!this.state.note.id){
          this.props.updateNote(this.state.note)
        }
      })
    } else {
      let notesArr = Object.values(this.props.notes)
      this.setState({note: {
        id: notesArr[notesArr.length - 1].id, 
        title: notesArr[notesArr.length - 1].title,
        body: e,
        notebook_id: notesArr[notesArr.length - 1].notebook_id
      }}, () => {
        if(this.userEditCount % 2 === 0 && !this.state.note.id){
          this.props.createNote(this.state.note)
        } else if(this.userEditCount % 2 === 0 && !!this.state.note.id){
          this.props.updateNote(this.state.note)
        }
      })
    }
   
  }

  update(field) {
    return e => this.setState({note: {...this.state.note, [field]: e.currentTarget.value}});
  }

  handleTitleSubmit(){
    if(this.state.note.id){
      this.props.updateNote(this.state.note)
    } else {
      let note = this.state.note;
      note.notebook_id = this.props.notebooks[0].id
      this.props.createNote(this.state.note)

    }
    this.setState({editTitle: !this.state.editTitle})
  }

  render(){
    let body;
    this.title = this.state.note.title
    if (this.state.note.body === undefined){
      body = ''
    } else {
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