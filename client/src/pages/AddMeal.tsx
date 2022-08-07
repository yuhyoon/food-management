import React, { useEffect, useState } from 'react';
import { getRegExp } from 'korean-regexp';
import e from 'express';
import addmealCss from './AddMeal.module.css';

const AddMeal = () => {
  const dummyData = [
    { id: 1, name: '바나나' },
    { id: 2, name: '바닐라라떼' },
    { id: 3, name: '바나나우유' },
    { id: 4, name: '보리밥' },
    { id: 5, name: '자라탕' },
    { id: 6, name: '장조림' },
    { id: 7, name: '밤밥' },
    { id: 8, name: '반역' },
  ];

  const [searchString, setSearchString] = useState<string>('');
  const [searchInput, setSearchInput] = useState<RegExp>();
  const [isCompleteBox, setIsCompleteBox] = useState(false);
  const [completeList, setCompleteList] = useState(dummyData);

  const handleInputValue = (e: { target: { value: string } }) => {
    const getKorean: RegExp = getRegExp(e.target.value, {
      initialSearch: true,
      startsWith: true,
    });
    setSearchInput(getKorean);
    setSearchString(e.target.value);
  };

  const handleCompleteList = () => {
    if (searchString === '') {
      setIsCompleteBox(false);
    } else {
      setIsCompleteBox(true);
      const matchTextList = dummyData.filter(text =>
        text.name.match(searchString),
      );
      setCompleteList(matchTextList);
    }
  };

  useEffect(() => {
    handleCompleteList();
  }, [searchInput]);

  return (
    <>
      <div className="px-2.5">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
            onChange={handleInputValue}
          />
        </div>
        {isCompleteBox && (
          <div className="dropdown">
            <ul className="menu p-2 shadow bg-base-100 rounded-box w-52">
              {completeList.map(item => {
                return (
                  <li key={item.id}>
                    <a className={addmealCss.nogap}>
                      <span className="text-orange-500">{searchString}</span>
                      {item.name.replace(searchString, '')}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default AddMeal;
