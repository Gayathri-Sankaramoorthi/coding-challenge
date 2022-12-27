/* sum of digits in ascending order is 9 between 1 to 200 */

for(let i = 0; i <= 200; i++) {
    let array200 = [i];
    array200.forEach((n)=> {
        if(n % 9 == 0) {
            let str = n.toString();
            let lastDigit = str.slice(2, 3);
            let secondDigit = str.slice(1, 2);
            let firstDigit = str.slice(0, 1);
    
            if(n < 100 && (firstDigit < secondDigit)) {
                let result = firstDigit + secondDigit;
                document.write(result + "<br>");
            }
            else if(n > 100 && (firstDigit < secondDigit) && (secondDigit< lastDigit)) {
                if(Number(firstDigit) + Number(secondDigit) + Number(lastDigit) == 9) {
                    let result = firstDigit + secondDigit + lastDigit;
                    document.write(result + "<br>");
                }
            }
        }
    });
}