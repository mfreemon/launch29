'use strict';

var should = require('should'),
    app = require('../../../server'),
    request = require('supertest');

describe('GET /api/awesomeThings', function() {
  
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/awesomeThings')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('POST /api/mail', function(){

  it('should respond respond with 200', function(done){
    request(app)
      .post('/api/mail')
      .expect(200)
      .end(function(err,res){
        if(err) return done(err);
        done();
      });
  });
});