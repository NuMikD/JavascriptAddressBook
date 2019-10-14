'use strict';

class AddressBook{
  constructor(contacts){
    this.contacts = contacts;
  }
  
  add(info) {
    this.contacts.push(info);
  }
  
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  
display() {
    contacts.innerHTML = '';
    nameInput.value = '';
    phoneInput.value = '';
    emailInput.value = '';
    relationSelect.value = '';

    for (let i = 0; i < this.contacts.length; i++) {
      const contact = this.contacts[i];
      const contactDiv = document.createElement('div');
      contactDiv.classList.add('contactDiv');
      const deleteButton = document.createElement('button');
    
      contactDiv.innerHTML = `
        <p class="nameP">Name: ${contact.name}</p> 
        <p class="emailP">Email: ${contact.email}</p> 
        <p class="phone">Phone: ${contact.phone}</p> 
        <p class="relationP">Relation: ${contact.relation}</p>`;
        deleteButton.classList.add('deleteButton');
        deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';

        deleteButton.addEventListener('click', () => {
            this.deleteAt(i);
            this.display();
          });
        contactDiv.appendChild(deleteButton);
        contacts.appendChild(contactDiv);

      }
  }
}

class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
  }
  
  const nameInput = document.querySelector(".nameInput");
  const emailInput = document.querySelector(".emailInput");
  const phoneInput = document.querySelector(".phoneInput");
  const relationSelect = document.querySelector("#relation");
  const buttonAdd = document.querySelector(".buttonAdd");
  const contacts = document.querySelector(".contacts");
    
  let book = new AddressBook([new Contact('Michael', 'michael@email.com', '248.895.3402', 'Owner'), new Contact('Lauren', 'lolo@email.com', '313.111.2222', 'Friend'), new Contact('Justin', 'just@email.com', '313.222.1111', 'Family')]);
  
  buttonAdd.addEventListener('click', () => {
    book.add(new Contact(nameInput.value, emailInput.value, phoneInput.value, relationSelect.value));
    book.display();
  });
    
  book.display(); 
