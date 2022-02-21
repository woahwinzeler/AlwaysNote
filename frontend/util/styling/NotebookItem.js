const getColor = () => { 
  return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)'
}

const generateStyle = (mode) => {
  switch (mode){
    case "PARTY":
      let color = getColor();
      let newStyle = {
        background: color, 
      }

  }

}

export default colorNotebookItem;