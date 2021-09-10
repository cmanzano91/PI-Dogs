/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

// var supertest = require('supertest-as-promised')(require('../app'));

var api = require('../../contoller/api');
var dogsDB = require('../../contoller/dogsDB');

const agent = session(app);
const dog = {
  name: 'Pug',
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
  });

describe('Routes', function() {

  beforeEach(function() {
    model.reset();
  });

  describe('/dogs', function() {
    // it('GET responde con un array vacío de entrada', function() {
    //   return supertest // supertest nos permite hacer y testear requests HTTP
    //     .get('/families') // hacemos un request HTTP: GET a '/families'
    //     .expect(200) // el codigo de status del response
    //     .expect('Content-Type', /json/) // podemos testear los headers
    //     .expect(function(res) {
    //       expect(res.body).toEqual([]); // testeamos la respuesta con el body
    //     });
    // });

    it('GET responde con todos los perros de la api', function() {
      api.apiDogs();
      return supertest
        .get('/dogs')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body).toHaveLength(172);
        });
    });

    it('POST agregar un nuevo perro y devuelve el perro agregado', function() {
      return supertest
        .post('/dogs')
        .send({name: 'Juan', minheight:'1', maxheight:'70', minweight:'5', maxweight:'30'})
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function(res) {
          expect(res.body).toEqual({name:'Juan',weight:'[1 - 70]',height:'[5 - 30]'});
          expect(dogsDB()).toHaveLength(1);
          // expect(dogsBD()[0]).toEqual({name:'Juan',weight:'[1 - 70]',height:'[5 - 30]', life_span:'',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0G5ozUnb5Scrh7O-U4R5leSxHo17hwUhRhEPaykldXUr5z5HJ451-C2oti-4-sWq7T0E&usqp=CAU'});
        });
    });
  });
});
});