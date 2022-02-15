import React from 'react'

class NoteList extends React.Component{
  constructor(props){
    super(props)

    // this.state = {
    //   fetchedNotebooks: [],
    //   render: false
    // }
  }

  // componentDidUpdate(){
  //   let id = this.props.id;
  //   console.log(this.props.notebooksToOpen.includes(id) && !this.state.fetchedNotebooks.includes(id))
  //   if(this.props.notebooksToOpen.includes(id) && !this.state.fetchedNotebooks.includes(id)){
  //     this.setState({fetchedNotebooks: [... fetchedNotebooks, id], 
  //       render: true 
  //     })
  //   } else if (!this.state.render) {
  //     this.setState({ render: false })
  //   }
  // }

  render(){
    let notes;
    if(this.props.notebooksToOpen.includes(this.props.id)){
      notes = this.props.notes.filter(note => note.notebook_id === this.props.id)
      notes = notes.map(note => <div className="NoteItem" key={note.id}> {note.title} </div>)
    }
    return(
      <div>
        {notes}
      </div>
    )
  }
}

export default NoteList;