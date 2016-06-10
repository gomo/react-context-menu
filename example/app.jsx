import {ContextMenu} from '../index.es6';


window.onload = () => {
  var menu = ReactDOM.render(
    <ContextMenu
      items={[
        {
          name: context => 'menu1',
          onClick: context => {
            console.log(context);
          }
        },
        {
          name: context => 'menu2',
          onClick: context => {
            console.log(context);
          },
          enable: context => false
        },
        {
          name: context => '-'
        },
        {
          name: context => 'menu3',
          onClick: context => {
            console.log(context);
          },
          enable: context => true
        }
      ]}
    />,
    document.getElementById('wrapper')
  );

  const elements = document.getElementsByClassName('box');
  Array.from(elements).forEach(item => {
    item.addEventListener('contextmenu', e => {
      e.preventDefault();
      menu.show({top: e.clientY, left: e.clientX}, {elem: item});
    });
  })
}
