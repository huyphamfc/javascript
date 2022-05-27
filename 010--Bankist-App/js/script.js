'use strict'


// DATA
const account1 = {
  owner: 'Huy Pham',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


// ELEMENTS
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
}


const displayBalance = function (account) {
  account.balance = account.movements.reduce((sum, mov) => sum + mov, 0)
  labelBalance.textContent = `${account.balance}€`;
};


const displaySummary = function (account) {
  const incomes = account.movements
    .filter(value => value > 0)
    .reduce((total, value) => total + value, 0);
  const outcomes = account.movements
    .filter(value => value < 0)
    .reduce((total, value) => total + value, 0);
  const invests = incomes * account.interestRate / 100;

  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;
  labelSumInterest.textContent = `${invests}€`;
}


const createUserNames = function (accounts) {
  accounts.forEach(account => {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(item => item[0])
      .join('');
  });
}
createUserNames(accounts);


const updateUI = function (account) {
  displayMovements(account.movements);
  displayBalance(account);
  displaySummary(account);
}


// EVENT HANDLERS
let currentAccount;


btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAccount = accounts.find(({ username }) => username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}!`;
    containerApp.style.opacity = '1';

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});


btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const usernameReceive = accounts.find(acc => acc.username === inputTransferTo.value);
  const amount = Number(inputTransferAmount.value);
  if (usernameReceive
    && usernameReceive.username !== currentAccount.username
    && amount > 0
    && currentAccount.balance >= amount
  ) {
    usernameReceive.movements.push(amount);
    currentAccount.movements.push(-amount);

    updateUI(currentAccount);
  }

  inputTransferTo.value = inputTransferAmount.value = '';
  inputTransferAmount.blur();
});


btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (inputCloseUsername.value === currentAccount.username
    && Number(inputClosePin.value) === currentAccount.pin
  ) {
    accounts.splice(
      accounts.findIndex(
        acc => acc.username === currentAccount.username
      ), 1
    )
  }

  inputCloseUsername.value = inputClosePin.value = '';
  containerApp.style.opacity = '0';
});