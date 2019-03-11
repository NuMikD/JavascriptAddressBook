'use strict';

//buttons
// const addcontactDivBtn = document.getElementById('addButton');
// const delBtn = document.querySelector('trashcan');

//form fields
// const name= document.getElementById('name').value;
// const email= document.getElementById('email').value;
// const phone= document.getElementById('phone').value;
// const relation= document.getElementById('select').value;



class Contact {
    constructor(name, phone, email, relation) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.relation = relation;
 }
}

class AddressBook {

contactInput (){
}
    constructor(){
        this.contacts = [
          {name: 'Michael', email: 'mike@gmail.com', phone: '1234567', relation: 'me'},
          {name: 'Lauren', email: 'lolo@gmail.com', phone: '7654321', relation: 'woman'}
        ];
    }


add(info) {
    let newContact = new Contact(info.name, info.email, info.phone, info.relation);
    this.contacts.push(newContact);
}


 deleteAt(index) {
     this.contacts.splice(index, 1);
     console.log(this.contacts);
 }

 deleteByName() {
    const name = prompt('Which contact name do you want to delete');
    const index = this.contacts.findIndex((contact) => contact.name === name)
     this.contacts.splice(index, 1);
     console.log(this.contacts);
 }

 print() {
    console.log(addressBook);
 }
}

let addressBook = new AddressBook();

// 2. Write a loop to prompt the user whether they would like to add, delete, print, or quit.
// while(true) {
//     const response = prompt('What would you like to do: add, delete, print, or quit?');

// a. When the user chooses to add, prompt them for the four contact properties

let info = {
    
        name: prompt("Enter Contact Name"),
        email: prompt("Enter Contact Email"),
        phone: prompt("Enter Contact Phone Number"),
        relation: prompt("Enter Contact Relation"),
        };
        // and call the AddressBook’s add method to add the new contact.
addressBook.add(info);

          
    // if(response === 'delete') {
    //     // b. When the user chooses to delete, prompt them for the index of the contact and
    //     const response = prompt('Would you like to delete the contact by name or index?');
        
    // if(response === 'name') {
    //         addressBook.deleteByName();
    //     }else if(response === 'index') {
    //     let index = prompt('Which contact index do you want to delete?:');
    //     // call the AddressBook’s deleteAt method to remove the contact.
    //     addressBook.deleteAt(parseInt(index));
    //     }
    // else if(response === 'print'){
    //         addressBook.print();
    // }
// }