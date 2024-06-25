

const mainContent = () => {
    const main = document.createElement('div');
    main.classList.add('main-container');

    const main_text = document.createElement('span');
    const main_menu = document.createElement('a');

    main_text.setAttribute('style', 'white-space: pre;');
    main_text.textContent = 'Italian\r\n';
    main_text.textContent += 'Pizza';
    main_text.classList.add('main-text');
    main.appendChild(main_text);

    main_menu.textContent = 'LET ME SEE THE MENU';
    main_menu.classList.add('btn-main-menu');
    main_menu.href = '#menu-page';
    main.appendChild(main_menu);

    const open_text = document.createElement('span');
    open_text.textContent = 'Open from 10am - 12pm';
    open_text.classList.add('open-text');

    document.body.appendChild(main);
    document.body.appendChild(open_text);
}

export default mainContent;
