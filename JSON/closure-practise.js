

var a = 12;
(function () {
    console.log(a);
    function f() {
        console.log(a)
    }
    f();
})();


var a = 5;
(function () {
    var a = 12;
    console.log(a); // 12
})();

function curriedCurry(n1) {
    return function (n2) {
        return n1 + n2;
    }
}
console.log(curriedCurry(1, 2, 3, 4)(3, 7, 5))




function fullstackHQ() {
    let place1 = 'Planet Earth';
    return middleFunction('United States');

    function middleFunction(place2) {
        return innerFunction('Illinois');

        function innerFunction(place3) {
            place = 'Chicago';
            return innermostFunction();

            function innermostFunction() {
                return 'Techglobal is at ' + place1 + ', ' + place2 + ', ' + place3 + ', ' + place;
            }
        }
    }
}
console.log(fullstackHQ());




incrementalChange(2); // => 2
incrementalChange(6); // => 8
incrementalChange(-1); // => 7

const incrementalChange = n => {
    let counter = 0;
if (n + 2) counter ++;
   return counter;

}
console.log(incrementalChange(2));

let counter = 0;

function addnext(a){
    counter += a;
    console.log(counter)
    return function(b) {
        counter += b;
        console.log(counter)
        return function(c) {
            counter += c;
            return counter;
        }
    }
}

console.log(addnext(2)(6)(-1));