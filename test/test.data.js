const chai = require('chai');
const expect = chai.expect;
const { fruits, vegetables, animals } = require('../src/data');

describe('Data Tests', () => {
  it('should contain fruits data', () => {
    expect(fruits).to.be.an('array');
    expect(fruits.length).to.be.greaterThan(0);
    expect(fruits[0]).to.have.property('name');
    expect(fruits[0]).to.have.property('type');
  });

  it('should contain vegetables data', () => {
    expect(vegetables).to.be.an('array');
    expect(vegetables.length).to.be.greaterThan(0);
    expect(vegetables[0]).to.have.property('name');
    expect(vegetables[0]).to.have.property('type');
  });

  it('should contain animals data', () => {
    expect(animals).to.be.an('array');
    expect(animals.length).to.be.greaterThan(0);
    expect(animals[0]).to.have.property('name');
    expect(animals[0]).to.have.property('type');
  });
});
