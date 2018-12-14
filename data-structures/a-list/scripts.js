(function() {
    // Variables - Function Scope
    let result,
        arr = [];


    // Function arrayToList
    const arrayToList = (arr) => {
        let aList = {},
            myArr = arr.slice();

        aList.value = myArr[0];
        aList.rest = (myArr.length > 1) ? arrayToList(myArr.splice(1, myArr.length - 1)) : null;
        return aList;
    };

    // Function listToArray
    const listToArray = (list) => {
        arr.push(list.value);        
        if(list.rest) {
            listToArray(list.rest);
        }
        return arr;   
    };

    // Get Array Input Node
    const $array = document.getElementById('array');

    // On click array-to-list button, get array input value then display result of arrayToList function
    const $arrayToList = document.getElementsByClassName('array-to-list');
    $arrayToList[0].addEventListener('click', () => {
        result = arrayToList($array.value.trim().split(','));
        document.getElementsByTagName('h2')[0].innerHTML = JSON.stringify(result);
    });

    // On click list-to-array button, get array input value then display result of listToArray function
    const $listToArray = document.getElementsByClassName('list-to-array');
    $listToArray[0].addEventListener('click', () => {
        arr = [];
        document.getElementsByTagName('h2')[0].innerHTML = listToArray(result).toString();
    });
})();