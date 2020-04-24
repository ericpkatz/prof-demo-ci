const { expect } = require('chai');
const app = require('supertest')(require('./app'));
const { sync } = require('./db');

describe('the truth', ()=> {
  it('true is true', ()=> {
    expect(true).to.equal(true);
  });
});

describe('GET /api/users', ()=> {
  beforeEach(()=> sync());
  it('there are 2 users', async()=> {
    const response = await app.get('/api/users');
    expect(response.status).to.equal(200);
    expect(response.body.length).to.equal(2);
  });
});
