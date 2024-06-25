

const contactContent = () => {
    const contact_page = document.createElement('div');
    contact_page.classList.add('contact-page');
    contact_page.id = 'contact-page';

    const contact_title = document.createElement('h1');
    contact_title.classList.add('contact-title');
    contact_title.textContent = 'CONTACT';

    contact_page.appendChild(contact_title);


    const contact_content = document.createElement('div');
    contact_content.classList.add('contact-content');

    const contact_p1 = document.createElement('p');
    contact_p1.textContent = 'Find us at some address at some place or call us at 05050515-122330';
    const contact_p2 = document.createElement('p');
    contact_p2.textContent = 'We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.';
    const contact_p3 = document.createElement('p');
    contact_p3.textContent = 'Reserve a table, ask for today\'s special or just send us a message:'
    contact_p3.classList.add('contact-p3');
    contact_content.appendChild(contact_p1);
    contact_content.appendChild(contact_p2);
    contact_content.appendChild(contact_p3);
    

    const contact_form = document.createElement('form');
    contact_form.classList.add('contact-form');

    const form_name = document.createElement('input');
    form_name.type = 'text';
    form_name.placeholder = 'NAME';

    const form_people = document.createElement('input');
    form_people.type = 'number';
    form_people.placeholder = 'How many people?';

    const form_date = document.createElement('input');
    form_date.type = 'datetime-local';
    form_date.placeholder = 'Date and time';
    form_date.value = '2020-11-16T20:00';

    const form_note = document.createElement('input');
    form_note.type = 'text';
    form_note.placeholder = 'Message \ Special requirements';

    const form_submit = document.createElement('button');
    form_submit.type = 'submit';
    form_submit.textContent = 'SEND MESSAGE';

    contact_form.appendChild(form_name);
    contact_form.appendChild(form_people);
    contact_form.appendChild(form_date);
    contact_form.appendChild(form_note);
    contact_form.appendChild(form_submit);
    contact_content.appendChild(contact_form);

    contact_page.appendChild(contact_content);
    document.body.appendChild(contact_page);
}

export default contactContent;