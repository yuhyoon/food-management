import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const removeToken = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <ul className="menu bg-base-100 p-2 rounded-box text-center">
      <div className="divider"></div>
      <li className="text-center">
        <button onClick={removeToken}>로그아웃</button>
      </li>
      <li className="text-error text-center">
        회원탈퇴 문의는
        <br /> shinetiger.dev@gmail.com 으로 부탁드립니다
      </li>
    </ul>
  );
};

export default Menu;