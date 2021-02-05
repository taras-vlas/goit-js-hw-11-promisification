/** 
 * - Показую та приховую добавляючи/видаляючи клас
 * - Приховую через якийсь час
 * - Приховую під час кліка
 * - Не забуваємо чистити таймер
 */

const refs = {
   notifiaction: document.querySelector('.js-notifiaction'),
};

let timeoutId = null;  //потрібен для чистки таймера

refs.notifiaction.addEventListener('click', notifiactionClickHandler);

showNotifiaction();

function notifiactionClickHandler() {  //Приховую під час кліка
  //console.log('@@@');
  clearTimeout(timeoutId);
  hideNotifiaction();
}

function showNotifiaction() {   //Показую, добавляючи клас
  refs.notifiaction.classList.add('is-visible');
/* ** variant 1 */
                                //i Приховую через 3000мс ,реєструючи відкладений визов hideNotifiaction
//   setTimeout(hideNotifiaction, 3000);
// }
/* ** or variant 2 */
                                //i Приховую через 3000мс ,реєструючи відкладений визов hideNotifiaction
  timeoutId = setTimeout(() => {    //вводимо  id - цей 'timeoutId' потрібен для чистки таймера
    console.log('Зараз визиватиму hideNotifiaction');
    hideNotifiaction();
  }, 3000);
}

function hideNotifiaction() {
  refs.notifiaction.classList.remove('is-visible');
}


 