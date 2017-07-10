import React , {Component} from 'react';

export default class Top extends Component{

  jumpToTop(){
    window.scrollTo(0, 0);
  }
  render(){
    return(
      <button onClick={this.jumpToTop.bind(this)} className="top"></button>
    )
  }
}
