// Simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
// 🐨 import the `render` and `fireEvent` utilities from '@testing-library/react'
import Counter from '../../components/counter'

// 💣 if you use beforeEach for removing the div from the page, you can remove beaforeEach. 
// React Testing Library does this automatically!

test('counter increments and decrements when the buttons are clicked', () => {
  // 💣 remove your created div, React Testing Library will create the div for you

  const div = document.createElement('div')
  document.body.append(div)


  // 🐨 swap ReactDOM.render with React Testing Library's render
  // Note that React Testing Library's render doesn't need you to pass a `div`
  // so you only need to pass one argument. render returns an object with a
  // bunch of utilities on it. For now, let's just grab `container` which is
  // the div that React Testing Library creates for us.
  // 💰 const {container} = render(<Counter />)
  ReactDOM.render(<Counter />, div);


  const [decrement, increment] = div.querySelectorAll('button') // – it's the possible way
  // how you find your buttons
  // 🐨 instead of `div` to find DOM nodes you'll want to use the `container` you get back
  // from React Testing Library
  
  // 🐨 get a reference to the message div:

  // 🐨 expect the message.textContent toBe 'Current count: 0'

  // 🐨 replace the next .click() statements with `fireEvent.click(button)`
  increment.click();
  // 🐨 assert the message.textContent
  decrement.click();
  // 🐨 assert the message.textContent
  
})
