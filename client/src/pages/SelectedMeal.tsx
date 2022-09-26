import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';

const SelectedMeal = () => {
  // AddMeal 페이지에서 했던 post 요청을 get 요청할 수 있으나 redux를 쓰고싶으니까 생략

  const selectedFood: string[] = useSelector(
    (store: RootState) => store.selectedFoods.checkedInput,
  );

  return (
    <>
      <p>
        <span>총칼로리</span>
        <span>{selectedFood}</span>
      </p>
      <ul className="menu bg-base-100 rounded-box">
        <li>
          <a></a>
        </li>
        <li>
          <a>ccc</a>
        </li>
        <li>
          <a>+ nav to AddMeal Page</a>
        </li>
      </ul>
      <Link to={'/'} className="btn btn-block mt-4" type="submit">
        완료
      </Link>
    </>
  );
};

export default SelectedMeal;
