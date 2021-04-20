> 
  let result = ''
  let randomNumber = -4.23
 
  if (randomNumber < 0) {
      result = result.concat("-");
    } 
       result = result.concat("$").concat(Math.abs(randomNumber))

 => -$4.23'
