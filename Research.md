## Etdiyim araşdırmalar

### Demo araşdırma mövzusu

Araşdırma detalları

#IMPERATIV və DEKLARATİV proqlamlaşdırman

İmperativ - kodun nece yazılmasını göstərir. (Question - How?)

Deklarativ - koddan nə əldə etməyini təyin etməkdir. (Question - What?)




#Functions Mövzusu

1. Function declaration ve function assignment arasındakı əsas fərqlər nələrdir? Nümunələrlə izah edin
   
Function Declaration ayrica bir mövhümdur və hər yerdə çağrıla bilər. Function Assignment isə ancaq function-i assign etdikden sonra oxunulur. Ancaq misal üçün function declaration her hansı bir başqa kod blokun içində olarsa, Function Declaration hemin kod blokunun xaricində cağırılsa error verecək.

"""
// Function Declaration
function multiple(x, y) {
  return x*y;
}
"""

"""
// Function Expression
let multiple = function(a, b) {
  return a*b;
};

"""


2. Arrow function təyinatının digər funcksiya təyinatlarından fərqi varmı? Varsa nələrdir?

Arrow function daha çox qısa bir sətrlik kod yazmaq üçün istifadə olunur.  Bir sətrlik oland Curly braces istifadə olunmur. Fərqlərdin biri budur.
Arrow Functions arqumentləri yoxdur və bir çox hallarda bu kodun oxunmağında bizə vaxt qenaet edir. Yeni alqoritm daha tez icra olunur. Hemçinin arrow functions siyahılarda tez tez istifadə olunur. 

3. Aşağıdakı funksiyalara elə əlavələr edin ki Bar() icra olunduğu zaman ekrana 5 çap olunsun. (41 və 45 sətrlər dəyişdirilmədən)
```
function Foo(){
  let a=5
}

function Bar(){
  console.log(a)
}
```

Answer:

```
let a = 5;

function Foo(){
    let a=5

}
  
function Bar(){
    console.log(a)
}
```

##Week05-Day02## HOMEWORK

Sort the array below in ascending order, WITHOUT using Javascript built-in Sort() function.


```
arr=[1,4,7,8,9,23,90,8]
```

Answer:

```
function bubbleSort(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

  return array;
}

var numbers = [1,4,7,8,9,23,90,8];
bubbleSort(numbers);
console.log(numbers);
```

## HACKERRANK ## TASK 1 ##

```

/**
*   A line of code that prints "Hello, World!" on a new line is provided in the editor. 
*   Write a second line of code that prints the contents of 'parameterVariable' on a new line.
*
*	Parameter:
*   parameterVariable - A string of text.
**/
function greeting(parameterVariable) {
    // This line prints 'Hello, World!' to the console:
    console.log('Hello, World!');
    console.log(parameterVariable)

    // Write a line of code that prints parameterVariable to stdout using console.log:
    
}
```

##Week05-Day04## HOMEWORK

DOM-da element və node arasında fərqlər və bənzərliklər nədir?

Cavab:
Node - DOM iyerarxıyasında hər hansı bir obyektə verilən ümumi bir addır. Node hemçinin DOM elementin daxili elementi de ola bilir. Misal üçün document.body. HTML taglerde ola biler. Misal üçün <p>. 

Element is hər hansı bir konkret tipdir. Element xüsüsi bir qovşaq növüdur ve HTML içərisində tag-lərin köməyilə göstərilə bilər. Həmçinin xüsusiyyətləri də ola bilər. Misal üçün id və class. 


## Week07-Day01 ## TASK ##

1. Python data tiplər hansılardır və Javascript data tiplərindən nə kimi fərqləri var:

Numeric Data Types
Pythonun elmi məqsədlər üçün dəqiq hesablamalar aparmağımıza kömək edəcək üç ədəd növü var. Bu ədədi növlərə daxildir: int (tam ədədlər), float (üzən nöqtə ədədləri) və kompleks. Hər birinin öz xüsusiyyətləri, xüsusiyyətləri və tətbiqləri var. Bunun əksinə olaraq, JavaScript -in yalnız iki ədəd növü var: Number və BigInt. Tam ədədlər və üzən nöqtə ədədləri həm Nömrəli tip sayılır. 

None vs. null
NONE - JavaScript -dəki ekvivalent dəyər sıfırdır və "hər hansı bir obyekt dəyərinin qəsdən olmamasını ifadə edir" 
NULL - JavaScript -dəki ekvivalent dəyər "heç bir obyekt dəyərinin qəsdən yoxluğunu əks etdirən" sıfırdır.

The undefined Value
JavaScript -də, bir ilkin dəyər təyin etmədən bir dəyişəni elan edərkən avtomatik olaraq təyin olunan xüsusi bir dəyərimiz var. 
Pythonda dəyişənə ilkin dəyər təyin etməlisiniz. İlkin dəyər olmadan elan edə bilmərik. 

Primitive Data Types in Python and JavaScript
İbtidai məlumat növləri, proqramlaşdırma dilində işləyə biləcəyimiz ən əsas dəyərləri təmsil edir. Bu iki dilin ibtidai məlumat növlərini müqayisə edək: 

Python: Integers (int), Floats (float), Booleans (bool), and strings (str).
JavaScripts: undefined, Boolean, String, Number, BigInt, and Symbol.

2. Python operatorları hansılardır Javascriptdə olmayan lakin python-da olan operatorları yazın:

Logical Operators
Python - and, or, not.
JavaScript - &&, ||, ! 

Comparing Values and Types
Python ==
Javascript ===

Type Operators
Python type()
JavaScript typeof

3. Python data tiplərinin başqa data tiplərinə çevrilmə ilə əlaqədar 5 nümunə yazın:
```
# floating point to integer
 
f = 10.0
 
# Converting to integer
n = int(f)
print(n)
print(type(n))

-----------------------

# integer to float
 
n = 10
 
# Converting to float
f = float(n)
print(f)
print(type(f))

-------------------


a = 10
 
# Converting number to string
s = str(a)
print(s)
print(type(s))

---------------------
```

4. Void və return funksiya nədir və python-da necə təyin olunur:

Qayıdış ifadələri bir funksiyadan çıxmağımıza və eyni zamanda funksiyanı çağırana bir dəyəri qaytarmağımıza imkan verir. Bir funksiyanın icrasını dayandırmasına səbəb olur və dəyəri başqa bir ifadəyə deyirlər. Bir qayıtma ifadəsindən sonra hər hansı bir kod yazsanız belə, icra edilməyəcək, çünki idarəetmə funksiyadan çıxacaq. 

Example:
```
def add(a, b):
 
    # returning sum of a and b
    return a + b

# calling function
res = add(2, 3)
print("Result of add function is {}".format(res))
```


##Week07-Day03## - Homework

```
#TASK 1
if __name__ == '__main__':
    print ("Hello, World!")

#TASK 2
if __name__ == '__main__':
    n = int(raw_input().strip())
    
    if n%2 != 0:
        print("Weird")
    else :
        if(n>=2 and n<=5):
            print("Not Weird")
        elif(n>=6 and n<=20):
            print("Weird")
        elif(n>20):
            print("Not Weird")
```


##Week08-Day02## Homework
```
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const page_type = urlParams.get('page_type')

console.log(page_type);
```
