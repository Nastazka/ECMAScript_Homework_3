// Задание 1: "Управление персоналом компании"
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).

// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith
// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales

class Employee {
    constructor(name) {
        this.name = name;        
    }
    displayInfo() {
        console.log(`Имя сотрудника: ${this.name}`);
    }
}

class Manager extends Employee {
    constructor(name, department) {
      super(name);
      this.department = department;
    }
  
    displayInfo() {
      super.displayInfo();
      console.log(`Отдел: ${this.department}`);
    }
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();



//Задание 2. "Управление списком заказов"
// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }
// const order = new Order(12345);
// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);
// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);
// console.log(order.getTotalPrice()); // Вывод: 600

// class Order {
//     constructor(orderNumber, products) {
//         this.orderNumber = orderNumber;
//         this.products = [];
//     }
//     addProduct(product) {
//         if (!product) {
//           throw new Error("Необходимо указать продукт.");
//         }
//         this.products.push(product);
//     }
//     getTotalPrice() {
//         return this.products.reduce((sum, product) => sum + product.price, 0);
//     }
// }

// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }
// const order = new Order(12345);
// const product1 = new Product("Phone", 500);
// order.addProduct(product1);
// const product2 = new Product("Headphones", 100);
// order.addProduct(product2);
// console.log(order.getTotalPrice()); // Вывод: 600
// console.log(order.products);



// Необязательное задание
// 1. Создать класс "Товар" с приватными полями "название", "цена" и "количество".
// Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость",
// которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно.
// Также класс должен иметь статическое поле "максимальное количество", которое будет задавать
// максимально допустимое количество товара для всех создаваемых объектов.
// Пример работы кода:
// const product1 = new Product('Тетрадь', 50, 200);
// console.log(product1.name); // "Тетрадь"
// console.log(product1.price); // 50
// console.log(product1.quantity); // 200
// console.log(product1.getCost()); // 10000
// const product2 = new Product('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"

// class Product {
//     MAX_QUANTITY = 1000;
//     constructor(name, price, quantity) {
//       this._name = name;
//       this._price = price;
//       this._quantity = quantity;
//     }
//     get name() {
//       return this._name;
//     }
//     set name(name) {
//       this._name = name;
//     }
//     get price() {
//       return this._price;
//     }
//     set price(price) {
//       this._price = price;
//     }
//     get quantity() {
//       return this._quantity;
//     }
//     set quantity(quantity) {
//       if (quantity > Product.MAX_QUANTITY) {
//         // throw new Error("Quantity is too high");
//         console.log('Quantity is too high');
//       }
//       this._quantity = quantity;
//     }
//     getCost() {
//       return this._price * this._quantity;
//     }
// }

// const product1 = new Product('Тетрадь', 50, 200);
// console.log(product1.name); // "Тетрадь"
// console.log("Цена: " + product1.price); // 50
// console.log("Количество: " + product1.quantity); // 200
// console.log("Стоимость: " + product1.getCost()); // 10000
// const product2 = new Product('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high" не работает:(
// console.log(product2.name);
// console.log("Цена: " + product2.price);
// console.log("Количество: " + product2.quantity);
// console.log("Стоимость: " + product2.getCost());





// 2 Создать класс "Пользователь" с приватными полями "имя", "возраст" и "электронная почта".
// Класс должен иметь публичные методы "изменить имя", "изменить возраст" и "изменить электронную почту",
// которые будут изменять соответствующие поля объекта. Также класс должен иметь статическое поле
// "максимальный возраст", которое будет задавать максимально допустимый возраст для всех создаваемых объектов.
// const user1 = new User('John', 30);
// console.log(user1.getName()); // "John"
// user1.setName('Mike');
// console.log(user1.getName()); // "Mike"
// console.log(User.getMaxAge()); // 120
// const user2 = new User('Jane', 150); // Error: Age is too high

// class User {
//     static MAX_AGE = 120;
//     constructor(name, age, email) {
//       this._name = name;
//       this._age = age;
//       this._email = email;
//     }
//     get name() {
//       return this._name;
//     }
//     set name(name) {
//       this._name = name;
//     }
//     get age() {
//       return this._age;
//     }
//     set age(age) {
//       if (age > User.MAX_AGE) {
//         throw new Error("Age is too high");
//       }
//       this._age = age;
//     }
//     get email() {
//       return this._email;
//     }
//     set email(email) {
//       this._email = email;
//     }
// }

// const user1 = new User('John', 30);
// console.log(user1.name); // "John"
// user1.name = 'Mike';
// console.log(user1.name); // "Mike"
// console.log(User.MAX_AGE); // 120
// const user2 = new User('Jane', 150); // Error: Age is too high не работает:(
// console.log(user2.name + ' ' + user2.age);