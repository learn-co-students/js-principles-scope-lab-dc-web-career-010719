customerName = 'bob';
const leastFavoriteCustomer = 'least';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  window.bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
  window.bestCustomer = name;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'least';
}
