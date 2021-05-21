

const convertFahrToCelcius = (fahr) => {
    if(Array.isArray(fahr)){
      return`${JSON.stringify(fahr)} is not a number but a/an array`
    }else if(isNaN(fahr)) {
      return`${JSON.stringify(fahr)} is not a number,it is a/an ${typeof(fahr)}`
    }
    else {
      return parseFloat((fahr - 32) * 5/9).toFixed(4)
    }
  
  }

const checkYuGiOh = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      if( i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
        arr.push('yu-gi-oh')
      }
      else if( i % 2 === 0 && i % 3 === 0) {
        arr.push('yu-gi')
      }
      else if (i % 2 === 0 && i % 5 === 0){
        arr.push('yu-oh')
      }
      else if(i % 3 === 0 && i % 5 === 0) {
        arr.push("gi-oh")
      }
      else if(i % 2 === 0){
        arr.push("yu")
      }
      else if(i % 3 === 0) {
        arr.push("gi")
      }
      else if(i % 5 === 0) {
        arr.push("oh")
      }
      else {
        arr.push(i)
      }
    }
    return isNaN(n) ? `invalid parameter:${JSON.stringify(n)}`:arr;
    }