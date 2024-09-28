// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test ("One dollar should be around 145.5 yens", function (){
    const {fromDollarToYen } = require ('./app.js');
    const yenes = fromDollarToYen(1);
    const expected = (1/1.07)*156.5;
    expect(fromDollarToYen(1)).toBeCloseTo(146.26,2);

})

test ("200 dollars should be around 29252.33 yens", function (){
    const {fromDollarToYen } = require ('./app.js');
    const yenes = fromDollarToYen(200);
    const expected = (1/1.07)*156.5;
    expect(fromDollarToYen(200)).toBeCloseTo(29252.33,1);

})
 test ("One Pound should be 179.89 yens", function(){
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(1);
    const expected = (1/(1/156.5))*(1/0.87);

    expect (fromYenToPound(1)).toBeCloseTo(179.88,1);
 })

 test ("300 Pounds should be around 53965.52 yens", function(){
    const {fromYenToPound} = require('./app.js');
    const pounds = fromYenToPound(300);
    const expected = (1/(1/156.5))*(1/0.87);

    expect (fromYenToPound(300)).toBeCloseTo(53965.52,1);
 })



