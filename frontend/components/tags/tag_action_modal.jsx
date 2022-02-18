import React from 'react'
import { motion } from "framer-motion"



class TagActionModal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      id: "",
      color: "",
      title: "",
      note_ids: "",
    }
  }  

  handleInput(type) {
    return e => {
        this.setState({...this.state, [type]: e.currentTarget.value})
    }
  }

  componentDidUpdate(){
    if(!!this.props.tag && typeof this.props.tag.id !== 'undefined'){
      if(this.state.id !== this.props.tag.id){
        this.setState({
          id: this.props.tag.id, 
          color: this.props.tag.color, 
          title: this.props.tag.title,
          note_ids: this.props.tag.note_ids,
        });
      }
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateTag(this.state);
    this.props.hideModal();
  }

  handleDelete(e){
    e.preventDefault();
    this.props.deleteTag(this.state.id);
    this.props.hideModal();
  }




  render(){


    if (this.props.modalOpen){
      return (
        <>
        <div className="action-tag-modal">
          {/* <div onClick={this.props.hideModal}> close modal </div> */}
          <form >
          <h2>{this.state.title}</h2>
          <label className="tag-color"> Choose Color {this.state.color}
                                  <input id="color" onChange={this.handleInput("color")} type="color" required="required" value={this.state.color} />
                                  </label>
                                <div>
                                    <label className="tag-title"> Tag Title 
                                      <input onChange={this.handleInput("title")} type="text" required="required" value={this.state.title} name="label" />
                                    </label>
                                    <button className="tag-button" type="submit" onClick={(e) => this.handleSubmit(e)}>Update Tag</button>
                                </div>

          </form>
          <button onClick={(e) => this.handleDelete(e)}> Delete Tag</button>
        </div>
        <div className="modal-screen" onClick={this.props.hideModal}></div>
        </>
      )
    } else {
      return (<div></div>)
    }
  }
}

export default TagActionModal; 