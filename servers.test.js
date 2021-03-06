describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
      serverNameInput.value = 'Alice';
    });
  
    it('should add a new server to allServers on submitServerInfo()', function () {
      submitServerInfo();
  
      expect(Object.keys(allServers).length).toEqual(1);
      expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });
  
    it('should create a new table row on updateServerTable()', function(){
      submitServerInfo();
      updateServerTable();
      expect(serverTbody.childNodes.length).toEqual(1);
      expect(document.getElementById('serverTable').getElementsByTagName('td')[0].innerText).toBe('Alice');
      expect(document.getElementById('serverTable').getElementsByTagName('td')[1].innerText).toBe('$0.00');
      expect(document.getElementById('serverTable').getElementsByTagName('td')[2].innerText).toBe('X');
    });
  
    afterEach(function() {
      serverNameInput.value = '';
      allServers = {};
      serverId=0;
    serverTbody.innerHTML='';
    });
    
  });
  