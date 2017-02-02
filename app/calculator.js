//cztery funkcje globalne (a,b)
'use strict';

var result = 0;

function add(a, b)
{
    a = parseFloat(a);
    b = parseFloat(b);
    result = (a + b).toFixed(2);
    document.getElementById('result').setAttribute('value', result);
}

function subtract(a, b)
{
    a = parseFloat(a, 10);
    b = parseFloat(b, 10);
    result = (a - b).toFixed(2);

    document.getElementById('result').setAttribute('value',result);

}

function multiply(a, b)
{
    a = parseFloat(a, 10);
    b = parseFloat(b, 10);
    result = (a * b).toFixed(2);

    document.getElementById('result').setAttribute('value', result);


}

function divide(a, b)
{
    a = parseFloat(a, 10);
    b = parseFloat(b, 10);
    result = (a /b).toFixed(2);

    document.getElementById('result').setAttribute('value', result);
}


var liczba1 = document.getElementById('pole1').value;
var liczba2 = document.getElementById('pole2').value;
liczba1 = parseFloat(liczba1, 10);
liczba2 = parseFloat(liczba2, 10);


