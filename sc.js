'use strict';
    
function getList(list){
    switch (list) {
        case 1:
            function checkPrimeNumber(a){
                let c = a;
                let b = (c < 2) ? false: true;
                for (let i = 2; i < a; i++){
                    if (((c % i) == 0) ) {
                        b = false;
                        break;
                    };
                    if (i>5) {
                        break;
                    }
                }
                return b;
            }
            
            let schet = 0;
            let rr = '';
            while (schet <= 100) {
                if (checkPrimeNumber(schet)) {
                    rr += ' ' + schet;
                }
                schet++;
            }
            alert (rr);
        break;
        case 2:

        break;
        case 3:
            let basket1=[
               {title: 'Кросовки',
                quantity: 1,
                price: 300},
                {title: 'футболка',
                quantity: 2,
                price: 400},
                {title: 'джинсы',
                quantity: 3,
                price: 500}
            ];
            
            class Basket {
                constructor() {
                    this.segments = [];
                }
                completion() {
                    let a = Math.floor(Math.random() * (6) + 1);
                    let title = ['кросовки', 'тапки', 'футболка', 'джинсы'];
                    for (let i = 0; i < a; i++) {
                        let b = Math.floor(Math.random() * (3));
                        let c = Math.floor(Math.random() * (10) + 1);
                        let d = Math.floor(Math.random() * (300) + 50);
                        this.segments.unshift(new Product(title[b], c, d));
                    }

                }
            } 
            
            class Product {
                constructor(title, quantity, price) {
                    this.title = title;
                    this.quantity = quantity;
                    this.price = price;
                }
            }
            
            let basket = new Basket();

            basket.completion();
            console.log(basket);
            
            function countBasketPrice(basket){
                let total = 0;
                for (let i = 0; i<basket.segments.length; i++ ){
                    total += basket.segments[i].quantity * basket.segments[i].price;
                    
                }
                return total;
            }

            alert('Общая сумма к оплате  ' + countBasketPrice(basket));

        break;
        case 4:
            let i=0;
            let j='';
            for (;;) {
                j += ' ' + i;
                if (i > 8) { 
                    break;
                }
                i++;
            }
            alert (j);
        break;
        case 5:
            let a = '';
            let z=1;
            let b = [];
            b[20]='x';
            let df;
            for (let i = 1; i < 21; i++){
                
                a += 'x';
                df = i < 10 ? ' ' : '';
                console.log(i +df  + piram(i)+ a);
            }

            function piram(j) {
                let a='';
                for (let z = 0; z < 40; z++){
                    if (b[z] !== 'x'){
                        a += ' ';
                    } else {
                        a += 'x';
                    }
                    
                }
                    
                b[20+j] = 'x';
                b[20-j] = 'x';
                return a
            }
        break;

    
        
    }
}