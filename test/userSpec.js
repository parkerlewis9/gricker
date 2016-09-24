var assert = require('assert');
var request = require('supertest');

describe('User API', function() {
  describe('/signup', function() {
    it('respond with a status code of 200 and content-type of html', function(done) {
      request("http://localhost:7777")
        .get("/users/signup")
        .expect(200)
        .expect("Content-Type", /html/)
        .end(function(err, res) {
          if(err) throw done(err);
          done();
        })
    });
  });
});
