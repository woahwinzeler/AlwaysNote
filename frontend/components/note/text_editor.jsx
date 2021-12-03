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
          title: "",
          body: "",
          notebook_id: this.props.notebookId
        }
      }
    }

    this.handleBody = this.handleBody.bind(this)
  }

  componentDidMount(){
    setTimeout(() => {
      this.state.note.id = this.props.noteId;
      this.state.note.notebook_id = this.props.notebookId
      this.props.getNote(this.state.note).then(
        () => this.setState({note: this.props.note}, console.log(this.state)))
    }, 10000)
  }


  //Somwhere need to setState to this.props.note 
  // shouldComponentUpdate(nextProps, nextState){

  // }

  componentDidUpdate(prevProps){
    if(typeof this.props.note !== 'undefined'){
      if(typeof this.props.note.id !== 'undefined'){
        if(Number.isInteger(this.props.note.id) && typeof prevProps.note === 'undefined'){
          console.log("CDU hit")
          this.setState({note: this.props.note})
        } else if (typeof prevProps.note.id !== 'undefined' && this.props.note.id !==  prevProps.note.id){
          console.log("CDU hit")
          this.setState({note: this.props.note})
        }
      }
    }
  }

  handleBody(e){
    this.setState({note: {
      id: this.props.note.id, 
      title: this.props.note.title,
      body: e,
      notebook_id: this.props.note.notebook_id
    }})

    //Call to save update Note, need to fetch note first though
    // if (!!this.state.body){
    //   console.log(this.state)
    //   this.props.updateNote(this.state)
    // }
  }

  render(){
    let body;
    console.log(this.state.note)
    this.title = this.state.note.title
    if (this.state.note.body === undefined){
      body = ''
    } else {
      body = this.state.note.body 
    }


    return (
      <div>
        <h2>{this.title}</h2>
        <ReactQuill 
          placeholder="Start note here..."
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleBody}
          value={body}
        />
      </div>
    )
  }
}

export default TextEditor; 