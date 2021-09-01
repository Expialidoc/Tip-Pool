it('should calculate the monthly rate correctly', function () {
    obj ={
      amount: 1000,
      years: 5,
      rate: 12,
    }
    expect(calculateMonthlyPayment(obj)).toEqual('22.24');
  });
  
  
  it("should return a result with 2 decimal places", function() {
    obj ={
    amount: 1000,
    years: 5,
    rate: 12,
  }; 
      let Val = calculateMonthlyPayment(obj);
      expect(Val.slice(Val.indexOf('.')+1).length).toEqual(2);
  });
  
