(function() {
    
    // Function arrayToList
    const arrayToList = (arr) => {
        let aList = {},
            myArr = arr.slice();

        aList.value = myArr[0];
        aList.rest = (myArr.length > 1) ? arrayToList(myArr.splice(1, myArr.length - 1)) : null;
        return aList;
    };

    // Function listToArray
    // const listToArray = (list) => {
    //     let arr = [],
    //         myList = list;
        
    //     for()    
    // };

    // Get Array Input Node
    const $array = document.getElementById('array');

    // On click button array-to-list get array input value
    const $arrayToList = document.getElementsByClassName('array-to-list');
    $arrayToList[0].addEventListener('click', () => {
        let result = arrayToList($array.value.trim().split(','));
        document.getElementsByTagName('h2')[0].innerHTML = JSON.stringify(result);
    });
})();