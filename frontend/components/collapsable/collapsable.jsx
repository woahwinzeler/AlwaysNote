import React from 'react'
class Collapsable extends React.Component{
  //will need to add a target prop, and a function that passes a value up, like
  //so passClass: (class) => this.setState({NotebookClass: class })
  constructor(props){
        super(props);
        console.log(this.props)
        this.cssClass = this.props.target; 
        let color = this.getColor();
        this.style = {
          background: color
        }
        this.state = {
          class: this.cssClass,
          arrowClass: "arrow-up",
        }

        this.collapseAndOpen = this.collapseAndOpen.bind(this); 
      }

      collapseAndOpen(){
        if(this.state.class === this.cssClass){
          this.setState({class: "hidden", arrowClass: "arrow-side"})
          this.props.changeClass("hidden")
        } else {
          this.setState({class: this.cssClass, arrowClass: "arrow-up"})
          this.props.changeClass(this.cssClass)
          
        }

      }

      getColor(){ 
        return "hsl(" + 360 * Math.random() + ',' +
                   (25 + 70 * Math.random()) + '%,' + 
                   (85 + 10 * Math.random()) + '%)'
      }
      
      

      render(){
        return (
          <div className="collapsable" style={this.style} onClick={() => this.collapseAndOpen()}> 
            <div className={this.state.arrowClass}>
            </div>
          </div>
        )
      }
}

export default Collapsable; 