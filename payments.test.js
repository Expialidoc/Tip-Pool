describe("Payments tests (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = '100';
        tipAmtInput.value = '10';
    });
  
    it('should create a new payment object on createCurPayment()', function () {
        let obj = {
        billAmt: '100', 
        tipAmt: '10',
        tipPercent: 10,
        }
         let obj2 = createCurPayment();
      expect(obj.billAmt).toEqual(obj2.billAmt);
      expect(obj.tipAmt).toEqual(obj2.tipAmt);
      expect(obj.tipPercent).toEqual(obj2.tipPercent);
    })

    it('should create a new allPayments object on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('100');
    })    
    it('should append payment table with input values', function () {
        let curPayment = createCurPayment();
        appendPaymentTable(curPayment); 
        let t = document.getElementById("paymentTable");

      expect(t.getElementsByTagName("td")[0].innerText).toEqual('$100');
      expect(t.getElementsByTagName("td")[1].innerText).toEqual('$10');
      expect(t.getElementsByTagName("td")[2].innerText).toEqual('10%');
      expect(t.getElementsByTagName("td")[3].innerText).toEqual('X');
    })
      
    afterEach(function() {
        
       billAmtInput.value = '';
       tipAmtInput.value = '';
       allPayments = {};
       paymentId = 0;
       paymentTbody.innerHTML= '';
       summaryTds[0].innerHTML = '';
       summaryTds[1].innerHTML = '';
       summaryTds[2].innerHTML = '';
   
    });
            
});
  