

const menuContent = () => {
    const menu_page = document.createElement('div');
    menu_page.classList.add('menu-page');

    const menu_title = document.createElement('h1');
    menu_title.textContent = 'THE MENU';
    menu_title.classList.add('menu-title');
    menu_page.appendChild(menu_title);

    const menu_container = document.createElement('div');
    menu_container.classList.add('menu-container');

    const menu_options = document.createElement('div')
    menu_options.classList.add('menu-options');

    ['PIZZA', 'DISHES', 'STARTER'].forEach((text) => {
        const btn = document.createElement('button');
        btn.classList.add('menu-buttons', text);
        btn.textContent = text;
        menu_options.appendChild(btn);
    });

    menu_container.appendChild(menu_options);

    menu_options.addEventListener('click', (e) => {
        const pizza_div = document.querySelector('.menues.pizza');
        const dishes_div = document.querySelector('.menues.dishes');
        const starter_div = document.querySelector('.menues.starter');
        const pizza_button = document.querySelector('.menu-buttons.PIZZA');
        const dishes_button = document.querySelector('.menu-buttons.DISHES');
        const starter_button = document.querySelector('.menu-buttons.STARTER');
        if (e.target.textContent === 'PIZZA') {
            pizza_div.style.display = 'block';
            dishes_div.style.display = 'none';
            starter_div.style.display = 'none';
            pizza_button.style.backgroundColor = 'red';
            dishes_button.style.backgroundColor = 'black';
            starter_button.style.backgroundColor = 'black';
        } else if (e.target.textContent === 'DISHES') {
            pizza_div.style.display = 'none';
            dishes_div.style.display = 'block';
            starter_div.style.display = 'none';
            pizza_button.style.backgroundColor = 'black';
            dishes_button.style.backgroundColor = 'red';
            starter_button.style.backgroundColor = 'black';
        } else if (e.target.textContent === 'STARTER') {
            pizza_div.style.display = 'none';
            dishes_div.style.display = 'none';
            starter_div.style.display = 'block';
            pizza_button.style.backgroundColor = 'black';
            dishes_button.style.backgroundColor = 'black';
            starter_button.style.backgroundColor = 'red';
        }
    });
    
    const menu_content = document.createElement('div');
    menu_content.classList.add('menu-content');

    pizzaMenu(menu_content);
    dishesMenu(menu_content);
    starterMenu(menu_content);

    menu_container.appendChild(menu_content);

    menu_page.appendChild(menu_container);
    
    document.body.appendChild(menu_page);
};

export default menuContent;

function pizzaMenu (menu_content) {
    const pizza_menu = [
        {name: 'Margherita', ingredient: 'Fresh tomatoes, fresh mozzarella, fresh basil', price: '$12.50'},
        {name: 'Formaggio', ingredient: 'Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)', price: '$15.50'},
        {name: 'Chicken', ingredient: 'Fresh tomatoes, mozzarella, chicken, onions', price: '$17.00'},
        {name: 'Pineapple O clock', ingredient: 'Fresh tomatoes, mozzarella, pineapple, bacon, basil', price: '$16.50'},
        {name: 'Meat town', ingredient: 'Fresh tomatoes, mozzarella, hot pepperoni, hot sausage, beef, chicken', price: '$20.00'},
        {name: 'Parma', ingredient: 'Fresh tomatoes, mozzarella, parma, bacon, arugula', price: '$21.50'}
    ];

    const pizza_container = document.createElement('div');
    pizza_container.classList.add('menues', 'pizza');

    pizza_menu.forEach((dish) => {
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        const menu_dish = document.createElement('div');
        menu_dish.classList.add('menu-dish'); 

        const dish_info = document.createElement('div');
        dish_info.classList.add('dish-info');

        const dish_name = document.createElement('h3');
        dish_name.textContent = dish.name;

        const dish_price = document.createElement('span');
        dish_price.textContent = dish.price;

        dish_info.appendChild(dish_name);
        dish_info.appendChild(dish_price);

        const dish_ingredient = document.createElement('p');
        dish_ingredient.textContent = dish.ingredient;

        const hr = document.createElement('hr');

        menu_dish.appendChild(dish_info);
        menu_dish.appendChild(dish_ingredient);
        menu_dish.appendChild(hr);

        menu_item.appendChild(menu_dish);
        pizza_container.appendChild(menu_item);
    });

    menu_content.appendChild(pizza_container);
}

function dishesMenu (menu_content) {
    const dishes_menu = [
        {name: 'Lasagna', ingredient: 'Special sauce, mozzarella, parmesan, ground beef', price: '$13.50'},
        {name: 'Ravioli', ingredient: 'Ravioli filled with cheese', price: '$14.50'},
        {name: 'Spahetti classica', ingredient: 'Fresh tomatoes, onions, ground beef', price: '$11.00'},
        {name: 'Seafood pasta', ingredient: 'Salmon, shrimp, lobster, garlic', price: '$25.50'}
    ];

    const dishes_container = document.createElement('div');
    dishes_container.classList.add('menues', 'dishes');

    dishes_menu.forEach((dish) => {
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        const menu_dish = document.createElement('div');
        menu_dish.classList.add('menu-dish'); 

        const dish_info = document.createElement('div');
        dish_info.classList.add('dish-info');

        const dish_name = document.createElement('h3');
        dish_name.textContent = dish.name;

        const dish_price = document.createElement('span');
        dish_price.textContent = dish.price;

        dish_info.appendChild(dish_name);
        dish_info.appendChild(dish_price);

        const dish_ingredient = document.createElement('p');
        dish_ingredient.textContent = dish.ingredient;

        const hr = document.createElement('hr');

        menu_dish.appendChild(dish_info);
        menu_dish.appendChild(dish_ingredient);
        menu_dish.appendChild(hr);

        menu_item.appendChild(menu_dish);
        dishes_container.appendChild(menu_item);
    });

    dishes_container.style.display = 'none';

    menu_content.appendChild(dishes_container);
}

function starterMenu (menu_content) {
    const starter_menu = [
        {name: 'Todays soup', ingredient: 'Ask the waiter', price: '$5.50'},
        {name: 'Bruschetta', ingredient: 'Bread with pesto, tomatoes, onion, garlic', price: '$8.50'},
        {name: 'Garlic bread', ingredient: 'Grilled ciabatta, garlic butter, onions', price: '$9.50'},
        {name: 'Tomozzarella', ingredient: 'Tomotoes and mozzarella', price: '$10.50'},
    ];

    const starter_container = document.createElement('div');
    starter_container.classList.add('menues', 'starter');

    starter_menu.forEach((dish) => {
        const menu_item = document.createElement('div');
        menu_item.classList.add('menu-item');

        const menu_dish = document.createElement('div');
        menu_dish.classList.add('menu-dish'); 

        const dish_info = document.createElement('div');
        dish_info.classList.add('dish-info');

        const dish_name = document.createElement('h3');
        dish_name.textContent = dish.name;

        const dish_price = document.createElement('span');
        dish_price.textContent = dish.price;

        dish_info.appendChild(dish_name);
        dish_info.appendChild(dish_price);

        const dish_ingredient = document.createElement('p');
        dish_ingredient.textContent = dish.ingredient;

        const hr = document.createElement('hr');

        menu_dish.appendChild(dish_info);
        menu_dish.appendChild(dish_ingredient);
        menu_dish.appendChild(hr);

        menu_item.appendChild(menu_dish);
        starter_container.appendChild(menu_item);
    });

    starter_container.style.display = 'none';

    menu_content.appendChild(starter_container);
}