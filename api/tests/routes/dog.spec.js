/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');


const agent = session(app);
const dog = {
  name: 'Pug',
  weight: '[1-20]',
  height: '[2-50]',
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));

  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );

    describe("GET /dogs", () => {
      it("should get 200 id", async () => { await agent.get("/dogs/3").expect(200)}) //
      it("should get 200 name", () =>
        agent.get("/dogs?name=Golden").expect(200));
      it("should get 400", () => agent.get("/dogs/-1").expect(400));
    });

    describe("GET /temperaments", () => {
      it("should receive a 200", () => {
        agent.get("/temperaments").expect(200);
      });
    });

    describe("POST create /dogs", () => {
      it("It should return a new dog (200)", () => {
        agent
          .post("/dogs")
          .send({name: 'Juan', minheight:'1', maxheight:'70', minweight:'5', maxweight:'30'})
          .then(() => {
            expect("Content-Type", /json/);
          });
      });
    });
  });
});