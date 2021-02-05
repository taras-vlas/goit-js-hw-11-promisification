const horses = [
    'Secretariat',
    'Eclihse',
    'West Australian',
    'Flying Fox',
    'Seabiscuit',
];

const getRandomTime = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

        /**** Це запускає одну конячку в забіг , а як запустити усіх ? ДЛЯ КОЖНОЇ ОКРЕМИЙ ПРОМІС*/
const run = horse => {
    return new Promise(resolve => {
        const time = getRandomTime(2000, 3500);

        setTimeout(() => {
            resolve({ horse, time });   //якщо конячка добігла
        }, time);
    });
};

// //console.log(run(horses[0]));
// run(horses[0]).then(result => {
//     console.log(result);
// });

console.log('%c Заїзд почався, ставки не приймаються', 'color:brown; font-size: 16px;');
const promises = horses.map(run);    /*** це синхронний код */
//const promises = horses.map(horse => run(horse));
console.log(promises);

Promise.all(promises).then(results => {  // Спрацює коли добіжить остання
    //console.log(results);

    console.log(
    '%c Заїзд закінчився, приймаються ставки', 'color:blue; font-size: 16px;');
    console.table(results);

})
//.catch(error => console.log(error));
.catch(console.log);


//Promise.race(promises).then(winner => {        // пошук найшвидшого
Promise.race(promises).then(({ horse, time }) => {  // пошук найшвидшого
    //console.log(winner);

    console.log(
        `%c Виграв ${horse}, фінішувавши за ${time} часу`, 'color:green; font-size: 16px;',
    );
});

