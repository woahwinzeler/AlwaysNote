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
      body: "",
      setBody: ""
    }

    this.handleBody = this.handleBody.bind(this)
  }

  handleBody(e){
    console.log(e)
    this.setState({body: e})
  }

  render(){
    return (
      <div>
        <h2>Text Editor</h2>
        <ReactQuill 
          placeholder="Start note here..."
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleBody}
          value={this.state.body}
        />
      </div>
    )
  }
}

export default TextEditor; 