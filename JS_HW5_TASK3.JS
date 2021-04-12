// Задание 3
// Напиши класс Storage, который будет создавать объекты
//  для управления складом товаров. При вызове будет 
//  получать один аргумент - начальный массив товаров,
//   и записывать его в свойство items.
// Добавь методы класса:
class Storage{
    constructor(array){
        this.items = array;
    }

getItems(){
    return this.items
} /* - возвращает массив текущих товаров*/
addItem(item) {
    this.items.push(item);
} /*- получает новый товар и добавляет его к текущим*/
removeItem(item) {
    for(let key of this.items){
        if (key === item) {
            let index = this.items.indexOf(key);
            this.items.splice(index , 1);
            return this.items;
        }
    }
    return this.items
  }
}
 /*- получет товар и, если он есть, удаляет его из текущих*/
const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жуки',
  'Антигравитатор',
]);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
storage.removeItem('Антигравитатор');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]