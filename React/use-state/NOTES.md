Starting learing React on 06.03.2023
React Component bir buton da olabilir bir sayfanın tamamı da olabilir.

JSX is stricter than HTML. You have to close tags like <br />. Your component also can’t return multiple JSX tags. You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:


--------
From scratch
run npx create-react-att [APP_NAME]

Edit src/App.js

Add some components

----------------
useState:
before that we need to understan;
1- hooks can be used only in function component, it cannot be used in class components.
2-hooks must be run in order.
it cannot be used in conditional state bcoz it may run or may not due to the result of condition.

Kısaca hook function içinde en üst seviyede olacak, herhangi bir if else loop vb içinde olmayacak.

useState is a function, it takes defult state as argument when called, it returns an array with two elemments so we can write like this:

const arr = useState(5);
but arr is generally destructured as follows:

const [count, setCount] = useState(4);
count: every single state when function is rendered.
setCount:This is a function that allows to update the current state(count here).
4: default starting value


function decreaseCount() {

    setCount(count - 1);  }




bu fonksiyonu da butona onclick ile eklediğimiz zaman her bastığımızda fonksiyon yeni değerle tekrar render ediliyor.
bu değer de arr[0] yani count değerinde tutuluyor.

Bu şekilde yaptığımızda aynı fonksiyon içinde birden fazla setCount(count - 1); olsa state fonksihonun her render edilmesinde değişeceği için sanki bir tane varmış gibi oluyor.

bunun yerinde callback function şeklinde yazarsak doğru olur. 

default initial value bir fonksiyon veya kompleks bir hesaplama olabilir.
Bu durumda fonksihonun her render edilmesinde çalışırsa yavaşlatabilir.
Bunun için fonksiyon şeklinde kullanılırsa sadece başta bir defa çalışır sonrasında çalışmaz.

Bu şekilde daha hızlı bir app elde ederiz. 

useState içinde bir değer değil de object kullanırsak;






