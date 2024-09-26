//Task 1

console.log('Task 1');

const musicCollection = {
    albums : [
        {
            title: 'The wall',
            artist: 'Pink Floyd',
            year: '1979'
        },
        {
            title: 'Nevermind',
            artist: 'Nirvana',
            year: '1991'
        },
        {
            title: 'Master of Puppets',
            artist: 'Metallica',
            year: '1986'
        }
    ],
    [Symbol.iterator] : function*(){
        yield* this.albums;
    }
}

for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist}(${album.year})`)
}


//Task 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:

// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:

// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:

// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.


console.log('Task 2');


const queueOfClients = ['Алексей', 'Мария', 'Ирина'];

const ordersData = new Map();

const dishesForOrders = ['Пицца Пепперони', 'Тирамису', 'Суши Калифорния', 'Пицца Маргарита', 'Чизкейк', 'Суши Филадельфия'];

const CooksSpecialization = new Map();
CooksSpecialization['Виктор'] = 'Пицца';
CooksSpecialization['Ольга'] = 'Суши';
CooksSpecialization['Дмитрий'] = 'Десерт';

queueOfClients.forEach(client => {
    let order = new Set();
        order.add(getRandomDish()); 
        order.add(getRandomDish(dishesForOrders)); 
    
    order = [...order];
    
    if (order.length === 2) {
        ordersData[client] = order;
        console.log(`Клиент ${client} сделал заказ ${order[0]} и ${order[1]}`);
    } else {
        ordersData[client] = [order[0], order[0]];
        console.log(`Клиент ${client} сделал заказ ${order[0]} 2 шт`);
    }
    
});




console.log(ordersData);


/**
 * Возвращает рандомное блюдо из массива блюд dishesForOrders
 */
function getRandomDish() {
    return dishesForOrders[Math.floor(Math.random() * (dishesForOrders.length))];
}




