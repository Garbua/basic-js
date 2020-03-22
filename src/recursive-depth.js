module.exports = class DepthCalculator {
    calculateDepth(array) {
        let count = 1;
        for(let i of array){
            if(Array.isArray(i)){
            let sum = 1;
            sum += this.calculateDepth(i);
            if(count < sum){
                count = sum;
            }
            }
        }
        return count;
    }
};
