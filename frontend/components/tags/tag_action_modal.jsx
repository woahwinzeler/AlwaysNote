import React from 'react'
import { motion } from "framer-motion"



class TagActionModal extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      color: "", 
      title: "",
    }
  }  




  render(){


    if (this.props.modalOpen){
      return (
        <>
        <div className="action-tag-modal">
          {/* <div onClick={this.props.hideModal}> close modal </div> */}
          <form >
          <label className="tag-color"> Choose Color {this.state.color}
                                  <input id="color" onChange={this.handleInput("color")} type="color" required="required" />
                                  </label>
                                <div>
                                    <label className="tag-title"> Tag Title 
                                      <input onChange={this.handleInput("title")} type="text" required="required" name="label" />
                                    </label>
                                    <button className="tag-button" type="submit">Create Tag</button>
                                </div>

          </form>
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