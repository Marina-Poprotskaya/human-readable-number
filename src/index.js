const arrNumSmall = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const arrNumBig = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const dozen = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];



module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    if (number<10) return arrNumSmall[number];
    else if (number >= 10 && number <20) return arrNumBig[number-10];
    else if (number >= 20 && number <100) return getNumber(number);
    else if (number >= 100 && number <1000) return getNumberHundred(number);
}

function getNumber (number) {
    number = number.toString().split('');
       if (number[0] == 0 && number[1] != 0) return  arrNumSmall[number[1]]
       else if (number[0] == 1 && number[1] == 0) return arrNumBig[0];
       else if(number[1] == 0 && number[0] != 1) return dozen[number[0]];
       else if (number[0] == 1) return arrNumBig[number[1]]
       else  return dozen[number[0]] + ' ' + arrNumSmall[number[1]];  
}

function getNumberHundred(number) {
    let result = '';
    let hundred = ' hundred'
    number = number.toString().split('');
       if(number[1] == 0 && number[2] == 0) return arrNumSmall[number[0]] + hundred;
       else { 
        result = arrNumSmall[number[0]];
        number = number.splice(1,2).join('');
        return result + hundred + ' ' + getNumber(number); ;
    }
}
