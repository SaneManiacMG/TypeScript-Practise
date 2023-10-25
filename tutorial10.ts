var getRegValue = function () {
    return 10;
};

console.log(getRegValue());

const getArrowValue = (m: any, bonus: any) => 10 * m + bonus;

console.log(getArrowValue(5, 100));

console.log(typeof getArrowValue);