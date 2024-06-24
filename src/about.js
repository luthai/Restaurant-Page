import onepage_restaurant from './Images/onepage_restaurant.jpg';

const aboutContent = () => {
    const about_page = document.createElement('div');
    about_page.classList.add('about-page');

    const about_title = document.createElement('h1');
    about_title.textContent = 'ABOUT';
    about_title.classList.add('about-title');
    about_page.appendChild(about_title);

    const about_content = document.createElement('div');
    about_content.classList.add('about-content');

    const p1 = document.createElement('p');
    p1.classList.add('about-text');

    p1.textContent = 
        `The Pizza Restaurant was founded in blabla by Mr. Italiano in lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
    
    const p2 = document.createElement('p');
    p2.classList.add('about-text');

    p2.textContent = `The Chef? Mr. Italiano himself`;

    const p3 = document.createElement('p');
    p3.classList.add('about-text');

    p3.textContent = `We are proud of our interiors.`;

    const restaurant_img = document.createElement('img');
    restaurant_img.src = onepage_restaurant;

    about_content.appendChild(p1);
    about_content.appendChild(p2);
    about_content.appendChild(p3);
    about_content.appendChild(restaurant_img);


    const opening_hours = document.createElement('h1');
    opening_hours.classList.add('opening-hours');
    opening_hours.textContent = 'Opening Hours';
    about_content.appendChild(opening_hours);

    const hours_div = document.createElement('div');
    hours_div.classList.add('hours-container');

    const mon_thur_div = document.createElement('div');
    mon_thur_div.classList.add('hours-content');
    const mon_p = document.createElement('p');
    mon_p.textContent = 'Mon & tue closed';
    const wed_p = document.createElement('p');
    wed_p.textContent = 'Wednesday 10.00 - 24.00';
    const thur_p = document.createElement('p');
    thur_p.textContent = 'Thursday 10:00 - 24:00';

    mon_thur_div.appendChild(mon_p);
    mon_thur_div.appendChild(wed_p);
    mon_thur_div.appendChild(thur_p);
    hours_div.appendChild(mon_thur_div);
    
    const fri_sun_div = document.createElement('div');
    fri_sun_div.classList.add('hours-content');
    const fri_p = document.createElement('p');
    fri_p.textContent = 'Friday 10:00 - 12:00';
    const sat_p = document.createElement('p');
    sat_p.textContent = 'Saturday 10:00 - 23:00';
    const sun_p = document.createElement('p');
    sun_p.textContent = 'Sunday Closed';

    fri_sun_div.appendChild(fri_p);
    fri_sun_div.appendChild(sat_p);
    fri_sun_div.appendChild(sun_p);
    hours_div.appendChild(fri_sun_div);
    
    about_content.appendChild(hours_div);

    about_page.appendChild(about_content);

    document.body.appendChild(about_page);
}

export default aboutContent;