## Etdiyim araşdırmalar

### Demo araşdırma mövzusu

Araşdırma detalları

#IMPERATIV və DEKLARATİV proqlamlaşdırman

İmperativ - kodun nece yazılmasını göstərir. (Question - How?)

Deklarativ - koddan nə əldə etməyini təyin etməkdir. (Question - What?)




#Functions Mövzusu

1. Function declaration ve function assignment arasındakı əsas fərqlər nələrdir? Nümunələrlə izah edin
   
Function Declaration ayrica bir mövhümdur və hər yerdə çağrıla bilər. Function Assignment isə ancaq function-i assign etdikden sonra oxunulur. Ancaq misal üçün function declaration her hansı bir başqa kod blokun içində olarsa, Function Declaration hemin kod blokunun xaricində cağırılsa error verecək.

// Function Declaration
function multiple(x, y) {
  return x*y;
}

// Function Expression
let multiple = function(a, b) {
  return a*b;
};


2. Arrow function təyinatının digər funcksiya təyinatlarından fərqi varmı? Varsa nələrdir?

Arrow function daha çox qısa bir sətrlik kod yazmaq üçün istifadə olunur.  Bir sətrlik oland Curly braces istifadə olunmur. Fərqlərdin biri budur.
Arrow Functions arqumentləri yoxdur və bir çox hallarda bu kodun oxunmağında bizə vaxt qenaet edir. Yeni alqoritm daha tez icra olunur. Hemçinin arrow functions siyahılarda tez tez istifadə olunur. 

3. Aşağıdakı funksiyalara elə əlavələr edin ki Bar() icra olunduğu zaman ekrana 5 çap olunsun. (41 və 45 sətrlər dəyişdirilmədən)

function Foo(){
  let a=5
}

function Bar(){
  console.log(a)
}


Cavab:



