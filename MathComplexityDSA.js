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
