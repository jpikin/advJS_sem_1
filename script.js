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

let dishesForOrders = new Map();
dishesForOrders.set('Пицца', ['Пеперони', 'Маргарита']);
dishesForOrders.set('Суши', ['Калифорния', 'Филадельфия']);
dishesForOrders.set('Десерт', ['Тирамису', 'Чизкейк']);

const cookSpecializations = new Map();
cookSpecializations.set('Пицца','Виктор');
cookSpecializations.set('Суши','Ольга' );
cookSpecializations.set('Десерт','Дмитрий');

queueOfClients.forEach(client => {
    let order = new Set();
    order.add(getRandomDish()); 
    order.add(getRandomDish()); 
    
    order = [...order];
        
    ordersData[client] = order;
    if (order[0][1] === order[1][1]) {
        console.log(`Клиент ${client} сделал заказ ${order[0].join(' ')} 2 шт.`)
    } else {
        console.log(`Клиент ${client} сделал заказ ${order[0].join(' ')} и ${order[1].join(' ')}`);
    }
    
    takeOrder(order);
});

/**
 * Возвращает массив с [рандомной специализацией и рандомным блюдом] из массива блюд dishesForOrders
 */
function getRandomDish() {
    const entries = Array.from(dishesForOrders.entries());
    const randomArray = entries[Math.floor(Math.random() * entries.length)];
    const randomSpecialization = randomArray[0];
    const randomDishCollection = randomArray[1];
    const randomDish = randomDishCollection[Math.floor(Math.random() * randomDishCollection.length)];
    
    return [randomSpecialization, randomDish];  
}

/**
 * Выводит в консоль информацию о том, какой повар готовит и какое блюдо.
 */
function takeOrder(order) {
    if (order[0][1] === order[1][1]) {
        console.log(`Повар ${cookSpecializations.get(order[0][0])} начал готовить ${order[0][1]} 2 шт.`);
    } else {
        order.forEach(el => console.log(`Повар ${cookSpecializations.get(el[0])} начал готовить ${el[1]}`));
    }
    
    
    
}




