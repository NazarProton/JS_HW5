// Задание 1
// Напиши функцию-конструктор Account, которая создает объект со 
// свойствами login и email. В prototype функции-конструктора
//  добавь метод getInfo(), который выводит в консоль значения 
//  полей login и email объекта который его вызвал.
 function Account(login , email) {
    this.login = login;
    this.email = email;
}
Account.prototype.getInfo = function() {
    console.log(`login: ${this.login}, email: ${this.email}`);
}
const mango = new Account('Mangozedog','mango@dog.woof',);
const poly = new Account(
/* login:*/'Poly',
/*  email:*/ 'poly@mail.com',
);
// console.log(Account.prototype.getInfo); // function
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
poly.getInfo(); // Login: Poly, Email: poly@mail.com