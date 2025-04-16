// Print 10 to 1 and 1 to 10 using recursion

function printNNum(n) {
    // Base condition
    if(n === 0){
        return
    }
    console.log(n)
    // recursive call
    printNNum(n-1)
    console.log(n)
}

printNNum(10)

// Sum of N numbers
class Solution {
    NnumbersSum(N) {
        // N = 4
        // 1 + 2 + 3 + 4 = 10
        if (N === 0) return 0;
        return N + this.NnumbersSum(N - 1);
    }

    factorial(n) {
        // Fact(n) = Fact(n-1) * n
        if(n == 0) return 1
        if(n == 1) return 1
        return n * this.factorial(n-1)
    }
}
const sol = new Solution()
console.log(sol.NnumbersSum(4))
const f = new Solution()
console.log( f.factorial(0))