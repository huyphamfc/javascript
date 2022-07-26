'use strict'


const ronaldo = {
    firstName: 'Cristiano',
    lastName: 'Ronaldo'
}

const messi = {
    firstName: 'Leo',
    lastName: 'Messi',
    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

messi.showFullName.call(ronaldo); // Cristiano Ronaldo