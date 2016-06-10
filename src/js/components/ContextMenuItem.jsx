import React from 'react';
import classNames from 'classnames';

export default class ContextMenuItem extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    };
  }

  onMouseOut(){
    if(this.props.enable){
      this.setState({mouseOver: false});
    }
  }

  onMouseOver(){
    if(this.props.enable){
      this.setState({mouseOver: true});
    }
  }

  onClick(e){
    if(this.props.enable){
      this.props.onClick(this.props.menu.state.context);
      this.props.menu.close();
    }
  }

  render(){
    return (
      <li
        className={classNames("rmMenuItem", {rmMouseOver: this.state.mouseOver, rmDisabled: !this.props.enable, rmSeparator: this.props.name == '-'})}
        onMouseOver={e => this.onMouseOver(e)}
        onMouseOut={e => this.onMouseOut(e)}
        onClick={e => this.onClick(e)}
      >
        {this.props.name == '-' ? null : this.props.name}
      </li>
    );
  }
}
