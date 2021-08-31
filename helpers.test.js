describe("Helpers tests", function() {
    
    beforeEach(function () {
         allPayments = {
             payment1: 
                 { billAmt: 100,
                   tipAmt: 10,
                   tipPercent: 10 },
             payment2:
                 { billAmt: 200,
                   tipAmt: 10,
                   tipPercent: 5 }
      };
    
    });

    it('should return correct total Bill', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(300);
    })

    it('should return correct total Tip', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
    })

    it('should return correct Tip Percent', function(){
            billAmt = 100,
            tipAmt = 12,
         expect(calculateTipPercent(billAmt, tipAmt)).toEqual(12);
    })

    it('should add a new td on appendTd()', function(){
        let Tr = document.createElement('tr');
        appendTd(Tr, 'test');

        expect(Tr.children.length).toEqual(1);
        expect(Tr.children[0].innerText).toEqual('test');
    })

    it('should delete a row in Servers Table', function(){
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerText).toEqual("X");
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
      });

    })