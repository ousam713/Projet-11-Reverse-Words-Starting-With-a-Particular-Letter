function isFind(arr,c){
    for(let i in arr){
        if (arr[i] === c){
            return true
        }
    }
    return false;
}

function specialReverse(str,c){
    let arr = str.split(" ");
    const swapArray = arr.map((element)=>{
        let arr = element.split("");
        if(isFind(arr,c)){
            arr = arr.reverse();
        }
        return arr.join("");
    });
    console.log(swapArray.join(" "));
}



specialReverse("peter piper picked pickled peppers" , "p");