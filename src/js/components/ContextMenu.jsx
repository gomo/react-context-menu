import React from 'react';
import assign from 'object-assign'
import MenuItem from './ContextMenuItem'
import PropTypes from 'prop-types'

export default class ContextMenu extends React.Component
{
  static getWindowSize(){
    const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight;

    return {width: width, height: height};
  }

  constructor(props) {
    super(props);
    this.state = {
      style: {
        position: 'absolute',
        display: 'none',
        zIndex: this.props.zIndex
      }
    };

    this.overlay = document.createElement('div');
    this.overlay.setAttribute('class', 'rmMenuOverlay');
    this.overlay.style["position"] = 'absolute';
    this.overlay.style["top"] = '0';
    this.overlay.style["left"] = '0';
    this.overlay.style["display"] = 'none';
    this.overlay.style["zIndex"] = this.props.zIndex - 1;
    document.body.appendChild(this.overlay);
    this.overlay.addEventListener('click', e => this.close());
    this.overlay.addEventListener('contextmenu', e => {
      e.preventDefault();
      this.close();
    });
  }

  show(pos, context){
    this.setState({
      style: assign({}, this.state.style, pos, {display: 'block'}),
      context: context
    }, () => {
      let windowSize = ContextMenu.getWindowSize();
      this.overlay.style["width"] = windowSize.width + 'px';
      this.overlay.style["height"] = windowSize.height + 'px';
      this.overlay.style['display'] = 'block';
    });
  }

  onMouseOut(){
    console.log('out');
  }

  onMouseOver(){
    console.log('over');
  }

  close(){
    this.setState(
      {style: assign({}, this.state.style, {display: 'none'})},
      () => {
        this.overlay.style['display'] = 'none';
      }
    );
  }

  render(){
    return (
      <div ref="menu" className="rmMenu" style={this.state.style}>
        <ul className="rmMenuItemList">
          {this.state.context ? this.props.items.map((item, key) => {
            if(!item.show || item.show(this.state.context)){
              return (
                <MenuItem
                  key={key}
                  name={item.name(this.state.context)}
                  onClick={item.onClick}
                  menu={this}
                  enable={item.enable ? item.enable(this.state.context) : true}
                />
              )
            }
          }) : null}
        </ul>
      </div>
    );
  }
}

ContextMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    show: PropTypes.func,
    enable: PropTypes.func
  })).isRequired,
  zIndex: PropTypes.number
}

ContextMenu.defaultProps = {
  zIndex: 100
}
