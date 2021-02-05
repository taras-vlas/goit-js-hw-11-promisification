/*
 *   Проміси це патерн щоб уникати callback
 */

// const fetchUser = userName => {
//     //const promise = new Promise((resolve, reject) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.3;
            
//             if (success) {
//                 const user = { name: userName, age: 26, posts: 74 };
//                 resolve(user);
//             }

//             const error = 'Сталася помилка :(';
//             reject(error);
//         }, 1000);
//     }); 
//                     //return success ? user : error;
//     //return promise;
// };

// fetchUser('Mango').then(onFetchUserSuccess).catch(onFetchUserError);
// //console.log(fetchUser('Mango'));

// function onFetchUserSuccess(user) { 
//     console.log(user);
// }
// function onFetchUserError(error) {
//     console.log(`%c ${error}`, 'color:red; font-size: 16px;');
// }





/*
 *  Пошук: typicod       Даю запит сходити на ...     Backend повертає
 */

// fetch('https://jsonplaceholder.typicode.com/todos/')
// //fetch('https://jsonplaceholder.typicode.com/todos/1')
// //   .then(response => response.json())
// //   .then(json => console.log(json))
  
//     .then(res => res.json())
//     .then(console.log)
//     .catch(console.log);

const fetchTodo = id => {            // <- ця Функція
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
        res => res.json(),
    ); // <- повертає проміс
};

fetchTodo(5)
    .then(todo => {
        console.log(todo);
    })
    .catch(console.log);  // <- визиваю цей проміс  і в зовнішньому коді чейню свої методи
  






const makePromise = delay => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(delay);
        }, delay);
    });
};

makePromise(2000).then(console.log);
makePromise(4000).then(console.log);
makePromise(1000).then(console.log);
makePromise(5000).then(console.log);