
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

    let canvasWidth = Math.max(Math.ceil((vw * this.width) / this.resolution), 16)
    let canvasHeight = Math.max(Math.ceil((vh * this.height) / this.resolution), 16);
    let colorMatrix = Array(canvasWidth).fill(0).map(row => new Array(canvasHeight).fill(0))

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
      canvasWidth: canvasWidth,
      canvasHeight: canvasHeight,
      canvasStyle: {
        width: this.resolution + "px",
        height: this.resolution + "px",
        background: "#FFFFFF", 
      },
      colorMatrix: colorMatrix,
    }

    //canvas width and height
   

    this.collapseCanvas = this.collapseCanvas.bind(this)
    this.handlePaint = this.handlePaint.bind(this)
  } 

  collapseCanvas(cssClass){
    this.setState({class: cssClass})
  }

  handlePaint(e){
    let colorIndex = this.colors.indexOf(this.state.color)
    let dataset = e.currentTarget.dataset
    let x = parseInt(dataset['x'])
    let y = parseInt(dataset['y'])
    let colorMatrix = this.state.colorMatrix;
    console.log(colorMatrix[x][y])
    colorMatrix[x][y] = colorIndex; 
    console.log(colorMatrix)
    this.setState({colorMatrix: colorMatrix}); 

  }

  componentDidUpdate(){
    //checks to see if viewport changes 
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    //may need to adjust threshhold 
    if(Math.abs(this.state.width - vw) + Math.abs(this.state.height - vh) > 10){
      let canvasWidth = Math.ceil((vw * this.width) / this.resolution)
      canvasWidth = canvasWidth > 16 ? canvasWidth : 16; 
  
      let canvasHeight = Math.ceil((vh * this.height) / this.resolution)
      canvasHeight = canvasHeight > 16 ? canvasHeight : 16;   
      this.setState({
        width: vw, 
        height: vh, 
        canvasWidth: canvasWidth, 
        canvasHeight: canvasHeight,
      })
    }
  }



  render(){

    let canvasWidth = this.state.canvasWidth;

    let canvasHeight = this.state.canvasHeight;



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
      // this.colors[this.colorMatrix[index][j]]
      for(let j = 0; j < canvasHeight; j++){
        let canvasStyle = {
          width:  canvasWidth + "px",
          height: canvasHeight/2 + "px",
          background: this.colors[this.state.colorMatrix[index][j]], 
        }
        // console.log(this.state.colorMatrix)
        // console.log(index, j)

        let key = index.toString() + "," + j.toString()
        subArr.push( <div key={key} style={canvasStyle} onClick={(e) => this.handlePaint(e)} data-x={index} data-y={j}></div>)
          //on click needs to set the point in the matrix and set state for color list 
      }
      return (
        <div className="row"> {subArr} </div>
      )
    })
    

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