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
    this.state = {
      title: "",
      body: "",
      intialBody: ""
    }

    this.handleBody = this.handleBody.bind(this)
  }

  componentDidMount(){
    this.setState({note: this.props.notes})
  }

  handleBody(e){
    this.setState({body: e})
  }

  render(){
    console.log(this.props)
    if (this.props.noteToOpen && this.state.title === ""){
      this.setState({title: this.props.notes.title, body: this.props.notes.body, intialBody: this.props.notes.body})
    }
    return (
      <div>
        <h2>{this.state.title}</h2>
        <ReactQuill 
          placeholder="Start note here..."
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleBody}
        />
      </div>
    )
  }
}

export default TextEditor; 