
import App from './App';
import { render, fireEvent } from '@testing-library/react'
import * as React from 'react';
import userEvent from "@testing-library/user-event";


test('ToDo', () => {
  const { getByText, getByLabelText } = render(<App />);

  // look for text on the page
  getByText('TODO');
  getByLabelText('Add todo:');
  getByText('Add #1');
});

test('add items to list', () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText('Add todo:');
  fireEvent.change(input, { target: { value: 'wash car' } });
  fireEvent.click(getByText('Add #1'));

  getByText('wash car');
  getByText('Add #2');
});

// userEvent expresses intent better
test("user-events allows users to add...", () => {
  const { getByText, getByLabelText } = render(<App />);

  const input = getByLabelText('Add todo:');
  const button = getByText("Add #1");

  userEvent.type(input, "Learn spanish");
  userEvent.click(button);

  getByText("Learn spanish");
  getByText("Add #2");
});


// // import { render, screen } from '@testing-library/react';
// // import * as ReactDom from 'react-dom'// this is also included in React completely

// // Testing that will have a lot of repeated things can be pulled out to a function
// // function render(componenet) {
// //   const root = document.createElement('div');
// //   ReactDom.render(componenet, root); // we are defining the target for our test
// //   return getQueriesForElement(root);
// // }


// test('ToDo', () => {
//   const { getByText, getByLabelText } = render(<App />);
//   // after rendering our component
//   // use DOM APIs (query selector) to make assertaions
//   // these are super basic types of tests
//   // expect(root.querySelector('h1').textContent).toBe('To Do');
//   // expect(root.querySelector('label').textContent).toBe('Add todo:');

//   // these are more specific and are closer to how the users interact with testing
//   expect(getByText('TODO')).not.toBeNull();
//   // expect(getByLabelText('Add todo: ')).not.toBeNull();

//   // written more generally these are the same tests as above just without the negatives and would still pass
//   getByText('TODO');
//   // getByLabelText('Add todo: '));


// });

// test('add items to list', () => {
//   const { getByText, getByLabelText } = render(<App />);
//   const input = getByLabelText('Add todo:')
//   fireEvent.change(input, { target: { value: "wash car" } })
//   fireEvent.click(getByText('Add #1'))

//   // confirm data
//   getByText('add #2');
//   getByText('wash car');
// })