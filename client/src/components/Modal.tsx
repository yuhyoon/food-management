import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Modal = () => {
  return (
    <label className="modal-box relative" htmlFor="">
      <ul>
        <li>
          <Link to="/Addmeal?type=brackfast">
            <input type="checkbox" name="morning"></input>
            <label htmlFor="morning">아침</label>
          </Link>
        </li>
        <li>
          <input type="checkbox" name="lunch"></input>
          <label htmlFor="lunch">점심</label>
        </li>
        <li>
          <input type="checkbox" name="dinner"></input>
          <label htmlFor="dinner">저녁</label>
        </li>
        <li>
          <input type="checkbox" name="snack"></input>
          <label htmlFor="snack">간식</label>
        </li>
      </ul>
    </label>
  );
};

export default Modal;
