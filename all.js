'use strict';

let user = {
  pril_1: prompt('Введи прилагательное описывающее дом (отвечает на вопрос какой)'),
  pril_2: prompt('Введи прилагательное описывающее гардероб (отвечает на вопрос каких)'),
  pril_3: prompt('Введи прилагательное описывающее художественное произведение (отвечает на вопрос какой)'),
  pril_4: prompt('Введи прилагательное какую вы хотите видеть экономику (отвечает на вопрос какие)'),

  // sayHi() {
  //   // "this" - это "текущий объект".
  //   alert(this.pril_1);
  // },

say_pril() {
  Swal.fire({
    title: "ПОЗДРАВЛЯЕМ",
    text: `Чтоб новый год был ${this.pril_1}.  
           Желаю тебе ${this.pril_2} друзей,   
           На работе ${this.pril_3} коллектив   
           В жизни ${this.pril_4} моменты`,
    imageUrl: 'img/NG.png',
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: "Custom image"
  });
}

  // say_pril() {
  //   Swal.fire(
  //     `Такой ${this.pril_1} человек`,
  //     `Стоит ${this.pril_2} как бетон`,
  //     `Пожелть ${this.pril_3} здоровья`,
  //     `Жить ${this.pril_4} как хорошо`
  //   );
  //   // alert (this.age);
  // }

};

// user.sayHi(); // John
user.say_pril ();

