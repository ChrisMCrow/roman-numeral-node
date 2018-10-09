import { converter } from "../src/roman-numeral.js";

describe('converter', function(){

  it('should not allow any outside the range of 1 and 3,999', function(){
    expect(converter(5000)).toEqual("Please enter a number between 1 & 3,999");
  });

  it('should return the number of "I"s equal to the number entered', function() {
    expect(converter(3)).toEqual("III");
  });

  it('should return "V" for the number "5"', function(){
    expect(converter(5)).toEqual("V");
  });

  it('should return "X" for each unit of "10"', function() {
    expect(converter(26)).toEqual("XXVI");
  });

  it('should return "L" for each unit "50"', function(){
    expect(converter(87)).toEqual("LXXXVII");
  });

  it('should return "C" for each unit of "100"', function() {
    expect(converter(278)).toEqual("CCLXXVIII");
  });

  it('should return "D" for each unit of "500"', function(){
    expect(converter(666)).toEqual("DCLXVI");
  });

  it('should return "M" for each unit of "1000"', function() {
    expect(converter(3777)).toEqual("MMMDCCLXXVII");
  });

  it('should return "IV" instead of "IIII"', function() {
    expect(converter(14)).toEqual("XIV");
  });

  it('should return "IX" instead of "VIIII"', function(){
    expect(converter(29)).toEqual("XXIX");
  });

  it('should return "XL" if the second to last number is "4"', function(){
    expect(converter(46)).toEqual("XLVI");
  });

  it('should return "XC" if the second to last number is "9"', function() {
    expect(converter(94)).toEqual("XCIV");
  });

  it('should return "CD" if the third to last number is "4"', function(){
    expect(converter(439)).toEqual("CDXXXIX");
  });

  it('should return "CM" if the third to last number is "9"', function() { 
    expect(converter(948)).toEqual("CMXLVIII");
  });
});