
import React from 'react'
import Collapsable from '../collapsable/collapsable'

class Canvas extends React.Component{
  constructor(props){
    super(props)

      // how pixels will a square take up?
      this.resolution = 16
      // how big will the canvas be in comparison to the page
      this.width = 0.36
      this.height = 0.4
  

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    this.colors = [
      "#FFFFFF",
      "#00FFFF", 
      "#808080",
      "#000080",
      "#C0C0C0",
      "#000000",
      "#008000", 
      "#808000", 
      "#008080",
      "#0000FF",
      "#00FF00", 
      "#800080", 
      "#FF00FF", 
      "#800000", 
      "#FF0000", 
      "#FFFF00", 
    ] 


    this.state = {
      color: this.colors[2],
      class: "canvas",
      width: vw, 
      height: vh, 
      canvasStyle: {
        width: this.resolution + "px",
        height: this.resolution + "px",
        background: "#FFFFFF", 
      },
    }

    //canvas width and height
    let canvasWidth = Math.max(Math.ceil((this.state.width * this.width) / this.resolution), 16)
    let canvasHeight = Math.max(Math.ceil((this.state.height * this.height) / this.resolution), 16);
    let colorMatrix = Array(canvasWidth).fill(Array(canvasHeight))
    for(let i = 0; i < colorMatrix.length; i++){
      colorMatrix[i].fill(0)
    }

    console.log(colorMatrix)

    this.colorMatrix = colorMatrix; 
   

    this.collapseCanvas = this.collapseCanvas.bind(this)
    this.handlePaint = this.handlePaint.bind(this)
  } 

  collapseCanvas(cssClass){
    this.setState({class: cssClass})
  }

  handlePaint(x, y){

    let colorIndex = this.colors.indexOf(this.state.color)
    debugger 
    console.log(this.colorMatrix)
    console.log(x, y, colorIndex)
    this.colorMatrix[x][y] = colorIndex;
    console.log(this.colorMatrix)
    this.forceUpdate();

  }

  componentDidUpdate(){
    //checks to see if viewport changes 
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
    //may need to adjust threshhold 
    if(Math.abs(this.state.width - vw) + (this.state.height - vh) > 10){
      this.setState({
        width: vw, 
        height: vh, 
      })
    }
  }



  render(){

    let canvasWidth = Math.ceil((this.state.width * this.width) / this.resolution)
    canvasWidth = canvasWidth > 16 ? canvasWidth : 16; 

    let canvasHeight = Math.ceil((this.state.height * this.height) / this.resolution)
    canvasHeight = canvasHeight > 16 ? canvasHeight : 16; 



    let colorSelectors = this.colors.map((color, index) => {
        let colorSelectorStyle = {
          // needs to be dynamic in order to adjust the size based on viewport
          // will set a resolution, as well as a compononetDidUpdate checking if
          // the viewport changes 
          width:  canvasWidth + "px",
          height: canvasHeight + "px",
          background: color, 
          border: '4px outset'
        }
      return (
        <div key={index} style={colorSelectorStyle} onClick={() => this.setState({color: color}, () => console.log(this.state))}>

        </div>
      )
    })

    let canvasArea = [...Array(canvasWidth).keys()].map(index => {
      let subArr = []
      for(let j = 0; j < canvasHeight; j++){
        let canvasStyle = {
          width:  canvasWidth + "px",
          height: canvasHeight + "px",
          background: this.colors[this.colorMatrix[index][j]], 
        }

        let key = index.toString() + j.toString()
        subArr.push( <div key={key} style={canvasStyle} onClick={() => this.handlePaint(index, j)}></div>)
          //on click needs to set the point in the matrix and set state for color list 
      }
      return (
        <div className="row"> {subArr} </div>
      )
    })
    
    // let subArr = [];
    // for(let j = 0; j < canvasHeight; j++){
    //   let canvasStyle = {
    //     width:  canvasWidth + "px",
    //     height: canvasHeight + "px",
    //     background: this.colors[this.colorMatrix[index][j]], 
    //   }
    //   let key = index.toString() + j.toString()
    //   subArr.push( <div key={key} style={canvasStyle} onClick={() => this.handlePaint(index, j)}></div>)
    // }
    // subArr = <div> {subArr} </div>
 
    //transform viewport values stored in state divided by the resolution in state to 
    // get number of divs to generate in a nested loop 

    let canvasStyle = {
      width: this.state.width * this.width,
      height: this.state.height * this.height 
    }

    
    return(
      <>
        <Collapsable target="canvas" changeClass={this.collapseCanvas}>  </Collapsable>
        <div className={this.state.class} style={canvasStyle}>
          <div className="colorSelector">
            {colorSelectors}
          </div>
          <div className="canvasArea" >
            {canvasArea}
          </div>
        </div>
    </>
    )
  }
}

export default Canvas;