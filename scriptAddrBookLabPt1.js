// JAVASCRIPT ADDRESS BOOK LAB PART 1
// Task: Build an object-oriented console address book application.
// The AddressBook class:
// Properties
// ● contacts: an array of Contact instances. This is initialized with a few contacts in the
// constructor.

'use strict';

class Contact {
    constructor(name, phone, email, relation) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.relation = relation;
 }
}

class AddressBook {
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
while(true) {
    const response = prompt('What would you like to do: add, delete, print, or quit?');

// a. When the user chooses to add, prompt them for the four contact properties
    if(response === 'add'){
        let info = {
            name: prompt("Enter Contact Name"),
            email: prompt("Enter Contact Email"),
            phone: prompt("Enter Contact Phone Number"),
            relation: prompt("Enter Contact Relation"),
          };
          // and call the AddressBook’s add method to add the new contact.
          addressBook.add(info);
    } else if(response === 'delete') {
        // b. When the user chooses to delete, prompt them for the index of the contact and
        const response = prompt('Would you like to delete the contact by name or index?');
        
        if(response === 'name') {
            addressBook.deleteByName();
        }else if(response === 'index') {
        let index = prompt('Which contact index do you want to delete?:');
        // call the AddressBook’s deleteAt method to remove the contact.
        addressBook.deleteAt(parseInt(index));
        }
    
    }
    else if(response === 'print') {
        // c. When the user chooses to print, call the AddressBook’s print method.
        addressBook.print();
    } else if(response === 'quit'){
        // d. When the user chooses to quit, end the program.
        break;
    }
}




// const book = new AddressBook ([new Contact('Michael', '143512543', 'adsfaf@gmail.com', 'me'), new Contact('Lauren', '1234125343', '12341@gmail.com', 'woman')]);

//Methods
// ● add(info): Makes a new Contact instance and adds it to this AddressBook’s contacts.
// ● deleteAt(index): Removes the contact at the given array index in this AddressBook’s
// contacts.
// ● print(): Logs all of this AddressBook’s contacts to the console.
// The Contact class:
// The class has a name, email, phone, and relation property. All four can be set by passing
// them into the constructor.

// Build Specifications:
// 1. Create the AddressBook and Contact classes. Create one instance of AddressBook.



// Bonus:
// Add a deleteByName method to AddressBook and use it in the loop. deleteByName(name)
// removes the contact with the given name from this AddressBook’s contacts.



