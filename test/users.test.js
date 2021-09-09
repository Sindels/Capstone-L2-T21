let expect = require('chai').expect;
let request = require('request'); //required expect from chai and request

//this will test if the server is not started
describe ('Server and fetch', () => { 
    it('server', function(done){
        request('http://localhost:8080', function(error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    }); //this will test if the information entered from the user will be fetched correctly
    it('fetch correct data', () =>{
        let term = 'ed sheeran'
        let media = 'music'
        request(`https://itunes.apple.com/search?term=${term}&media=${media}&limit=25`, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });
});
