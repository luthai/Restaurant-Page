

const menuContent = () => {


    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-container');

    const menu_title = document.createElement('h1');
    menu_title.textContent = 'THE MENU';
    menu_title.classList.add('menu-title');
    menu_container.appendChild(menu_title);

    const menu_options = document.createElement('div')
    menu_options.classList.add('menu-options');

    
    document.body.appendChild(menu_container);
}

export default menuContent;