class Solution {
    GCD(n1, n2) {
        const min = Math.min(n1, n2)
        for(let i = min; i>0; i++) {
            if(n1%i===0 && n2%i ===0) {
                return i
            }
        }
    }
}

class Solution {
    GCD(n1, n2) {
        while (n2 !== 0) {
            let temp = n2;
            n2 = n1 % n2;
            n1 = temp;
        }
        return n1
    }
}


// Armsgtrong

class Solution {
    isArmstrong(n) {
        const temp = n.toString();
        const len = temp.length;

        const digitArr = temp.split('');
        const revNum = digitArr.reduce((acc, curr) => {
            return acc + Math.pow(+curr, len);
        }, 0);

        return revNum === +n;
    }
}

// Divisor
class Solution {
    divisors(n) {
        let div = [1]
        for(let i=2; i*i < n; i++) {
            if(n%i === 0) {
                div.push(i, n/i)
            }
        }
        div.push(n)
        return div
    }
}

// Prime Number
class Solution {
    isPrime(n) {
          let divCnt = 2
          for(let i = 2; i< Math.sqrt(n); i++) {
            if(n % i === 0) {
                return false
            }
          }

          return true
    }
}a