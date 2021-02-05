// const promise = new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;

//     setTimeout(() => {
//         if (success) {
//             resolve('Успішно');
//         }

//         reject('Помилка');
//     }, 1000)
// });

//                 //let isloading = false; // приклад для finally      
//                 //isloading = true;      // приклад для finally
//                 //spinner.classList.add('visible');
                
// console.log('До');
//         /** асинхронна ф-ція: методи  .then .catch .finally*/
// promise
//     .then(result => {
//         console.log(`%c${result}`, 'color:green; font-size: 20px');
//     })
//     .catch(error => {
//         console.log(`%c ${error}`, 'color:red; font-size: 20px;');
//     })
//     .finally(() => {
//                 //isloading = false;  // приклад для finally
//                 //spinner.classList.remove('visible');
//     });

// console.log('Після');   

// // let data;
// // console.log('Дата до промиса', data);

// // promise
// //     .then(result => {
// //         console.log(`%c${result}`,'color:green; font-size: 20px');
// //         data = result;
// //         console.log('Дата всередині колбека', data);
// //     })
// //     .catch(error => console.log(`%c${error}`, 'color:red; font-size: 20px'));

// // console.log('Після');   

/*
 *  Чейніиг
 */

const promise = new Promise((resolve) => {
    resolve(5);
});

// promise.then(value => console.log(value)); // на цей callback робимо ланцюжок :
promise.then(x => {
    console.log('x: ', x);

    return x * 2;
}).then(y => {
    console.log('y: ', y);

    return y + 50;
}).then(z => {
    console.log('z: ', z);
}).catch(error => console.log(error));