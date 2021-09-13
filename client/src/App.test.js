import { render, screen } from '@testing-library/react';
import App from './App';

import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import '@testing-library/jest-dom'

import NewDog from "../src/componentes/NewDog/NewDog";


configure({ adapter: new Adapter() });



describe('NewDog', ()=>{
  it("has a default name to be empty ", () =>{
    const wrapper = shallow(<NewDog/>)
    let name = wrapper.find('input').first()
    name.simulate('change',{
      target:{value : 'Juan'}
    })
    name = wrapper.find('input').first()
    expect(name.props().value).toEqual('Juan')
  })
})


// describe('<NewDog/>', () => {
//   let component;

//   beforeEach(() =>{
//     component = render(<NewDog/>)
//   })

//   test('render contents', ()=>{
//   const render = render(<NewDog />)
//   render.container.querySelector('form')
//   // console.log(form)
// })

// })



// test('render contents', ()=>{
//   const render = render(<NewDog />)
//   const form = render.container.querySelector('form')
//   // console.log(form)
// })

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
//
// import Enzyme from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
// import { createSerializer } from 'enzyme-to-json';

// Enzyme.configure({ adapter: new Adapter() });
// expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));

// import '@testing-library/jest-dom';
// import { shallow } from 'enzyme';
// import NewDog from '../src/componentes/NewDog/NewDog.jsx';

// describe("<NewDog />", () => {
//   // describe("Estructura", () => {
//     let wrapper = shallow(<NewDog />);
//     beforeEach(() => {
//       wrapper = shallow(<NewDog />);
//     });
//     test('debería mostrar <NewDog /> correctamente ', () => {
//       expect(wrapper).toMatchSnapshot();
//    });  
//     it("Renderiza un <form>", () => {
//       expect(wrapper.find("form")).toHaveLength(1);
//     });

//     it('Renderiza un label con el texto igual a "Name/Breed "', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find("label").at(0).text()).toEqual("Name/Breed ");
//     });

//     it('Renderiza un input con la propiedad "name" igual a "name"', () => {
//       expect(wrapper.find('input[name="name"]')).toHaveLength(1);
//     });

//     it('Renderiza un label con el texto igual a "Min. height (cm) "', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find("label").at(1).text()).toEqual("Min. height (cm) ");
//     });

//     it('Renderiza una textarea con la propiedad "name" igual a "minheight"', () => {
//       expect(wrapper.find('textarea[name="minheight"]')).toHaveLength(1);
//     });

//     it('Renderiza un label con el texto igual a "Max. height (cm)  "', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find("label").at(2).text()).toEqual("Max. height (cm)  ");
//     });

//     it('Renderiza un input con la propiedad "name" igual a "maxheight"', () => {
//       expect(wrapper.find('input[name="maxheight"]')).toHaveLength(1);
//     });

//     it('Renderiza un label con el texto igual a "Min. weight (kg)  "', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find("label").at(3).text()).toEqual("Min. weight (kg)  ");
//     });

//     it('Renderiza un input con la propiedad "name" igual a "minweight"', () => {
//       expect(wrapper.find('input[name="minweight"]')).toHaveLength(1);
//     });

//     it('Renderiza un label con el texto igual a "Max. weight (cm)  "', () => {
//         // El orden en el que se encuentran los Labels es importante.
//         expect(wrapper.find("label").at(3).text()).toEqual("Max. weight (cm)  ");
//       });
  
//       it('Renderiza un input con la propiedad "name" igual a "maxweight"', () => {
//         expect(wrapper.find('input[name="maxweight"]')).toHaveLength(1);
//       });

//     it('Renderiza un label con el texto igual a "Min. life span "', () => {
//         // El orden en el que se encuentran los Labels es importante.
//         expect(wrapper.find("label").at(3).text()).toEqual("Min. life span ");
//       });
  
//       it('Renderiza un input con la propiedad "name" igual a "minlife_span"', () => {
//         expect(wrapper.find('input[name="minlife_span"]')).toHaveLength(1);
//       });
  
//     it('Renderiza un label con el texto igual a "Choose temperaments: "', () => {
//         // El orden en el que se encuentran los Labels es importante.
//         expect(wrapper.find("label").at(3).text()).toEqual("Min. life span ");
//       });
        
//     it('Renderiza un boton con el "type" "submit"', () => {
//       expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
//     });
//   });

// // })
