import React, { useState } from 'react';

const Checklist = () => {
  const [checkedItems, setCheckedItems] = useState({
    item1: false,
    item2: false,
    item3: false,
  });

  const handleCheck = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className='p-12 bg-gray-300 w-8/12 mx-auto mt-16'>
      <h2 className='text-5xl font-serif font-bold text-center text-gray-800'>Checklist</h2>
      <ul className='text-3xl text-center gap-5 justify-between pt-20'>
        <li className='py-3 text-gray-700'>
          <label htmlFor="#" className='px-4'>Are You a Citizen</label>
          <input
            type="checkbox"
            name="Yes"
            checked={checkedItems.Yes}
            onChange={handleCheck}
            defaultValue={'No'}
          />
          {/* <span>Item 1</span> */}
        </li>
        <li className='py-3 text-gray-700'>
          <label htmlFor="#" className='px-5'>Are You over 21</label>
          <input
            type="checkbox"
            name="Yas"
            checked={checkedItems.Yas}
            onChange={handleCheck}
            defaultValue={'No'}
          />
          {/* <span>Item 2</span> */}
        </li>
      </ul>
      <h2 className='text-4xl text-gray-800'>Selected Items:</h2>
      <ul className='text-3xl text-gray-700 py-4'>
        {Object.keys(checkedItems).map((item) => {
          if (checkedItems[item]) {
            return <li key={item}>{item}</li>;
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default Checklist;