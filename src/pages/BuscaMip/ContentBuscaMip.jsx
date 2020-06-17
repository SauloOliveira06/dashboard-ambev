import React, { Component } from 'react'
import api from './../../api'

class ContentBuscaMip extends Component{
  
  state = {
    mip: [],
  }
  
  async componentDidMount(){
    const response = await api.get('')
    
    this.setState({mip: response.data});
  }

  render(){
    const { mip } = this.state;
    return(
      <div>
        <h1>Listar Produtos MIP</h1>
        {console.log(mip)}
      </div>
    )
  }
}

export default ContentBuscaMip;
