import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { ko } from 'date-fns/esm/locale';

const DateHeader = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  // TODO: 오늘 날짜인지 검사
  // - 그에 따라 뒤로가는 버튼 렌더
  // date 한글화
  registerLocale('ko', ko);

  return (
    <div>
      <DatePicker
        selected={currentDate}
        dateFormat={'yy.MM.dd'}
        maxDate={new Date()} // 오늘 날짜 이후 선택 불가능
        locale="ko"
        onChange={date => date && setCurrentDate(date)}
      />
    </div>
  );
};

export default DateHeader;
