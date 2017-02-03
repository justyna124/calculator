//cztery funkcje globalne (a,b)
'use strict';

var result = 0;
function reset()
{
    document.getElementById('pole1').value = '';
    document.getElementById('pole2').value = '';
    document.getElementById('result').value = '';
}
function emptySpace(a, b)
{
    if (a === '' || b === '') {
        alert('Nie wypełniłeś wszystkich pól');
        reset();
    }

}


function add(a, b)
{
    emptySpace(a, b);
    if (isNaN(a) || isNaN(b)) {
        alert('Wprowadzona wartość nie jest liczbą.');
        reset();

    }

    else {
        a = parseFloat(a);
        b = parseFloat(b);
        result = (a + b).toFixed(2);
        document.getElementById('result').value = parseFloat(result);

    }
}

function subtract(a, b)
{
    emptySpace(a, b);
    if (isNaN(a) || isNaN(b)) {
        alert('Wprowadzona wartość nie jest liczbą.');
        reset();

    }

    else {
        a = parseFloat(a, 10);
        b = parseFloat(b, 10);
        result = (a - b).toFixed(2);

        document.getElementById('result').value = parseFloat(result);

    }
}

function multiply(a, b)
{
    emptySpace(a, b);
    console.log(a == '');
    if (isNaN(a) || isNaN(b)) {
        alert('Wprowadzona wartość nie jest liczbą.');
        reset();
    }

    else {
        a = parseFloat(a, 10);
        b = parseFloat(b, 10);
        result = (a * b).toFixed(2);

        document.getElementById('result').value = parseFloat(result);

    }
}
function divide(a, b)
{
    emptySpace(a, b);
    if (isNaN(a) || isNaN(b)) {
        alert('Wprowadzona wartość nie jest liczbą.');
        reset();
    }
    else if (b === '0') {
        alert('Nie dzielimy przez 0');
        reset();
    }

    else {
        a = parseFloat(a, 10);
        b = parseFloat(b, 10);
        result = (a / b).toFixed(2);

        document.getElementById('result').value = parseFloat(result);
    }
}

function numberClick(number){

    document.getElementById('boxNum').value =number ;

}





