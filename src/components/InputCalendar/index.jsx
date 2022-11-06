import {
  setDay,
  listMonths,
  listWeekdaysShort,
  upMonth,
  downMonth,
  getDate
} from '@utils/Time';
import './InputCalendar.css';

const InputCalendar = ({
  toogleCalendar,
  setToogleCalendar,
  iniDate,
  endDate,
  setIniDate,
  setEndDate,
  iniDateHover,
  endDateHover,
  setIniDateHover,
  setEndDateHover,
  thisDate = new Date(),
  setThisDate,
  otherDate = new Date()
}) => {
  const thisYear = new Date(thisDate).getFullYear();
  const thisMonth = new Date(thisDate).getMonth();

  const monthName = listMonths[thisMonth];
  const weekdays = [...Array(7).keys()];
  const weekdaysName = weekdays.map(key => listWeekdaysShort[key]);
  const daysOfMonth = new Date(thisYear, thisMonth + 1, 0).getDate();
  const startsOn = new Date(thisYear, thisMonth, 1).getDay();

  const days = [
    ...Array(daysOfMonth)
      .fill()
      .map((_, idx) => idx + 1)
  ];

  const handleSelectDate = day => {
    if (
      endDate &&
      toogleCalendar === 'left' &&
      new Date(endDate) < new Date(thisDate).setDate(day)
    ) {
      setToogleCalendar('right');
      setEndDate(setDay(thisDate, day));
    } else if (
      toogleCalendar === 'left' ||
      new Date(iniDate) > new Date(thisDate).setDate(day)
    ) {
      setToogleCalendar('right');
      setIniDate(setDay(thisDate, day));
    } else {
      setToogleCalendar('');
      setEndDate(setDay(thisDate, day));
      setIniDateHover('');
      setEndDateHover('');
    }
  };

  const handleBackMonth = () => {
    if (
      new Date(thisDate) < new Date(otherDate) ||
      new Date(upMonth(otherDate, 1)) < new Date(thisDate)
    ) {
      setThisDate(downMonth(thisDate, 1));
    }
  };

  const handleNextMonth = () => {
    if (
      new Date(thisDate) > new Date(otherDate) ||
      new Date(downMonth(otherDate, 1)) > new Date(thisDate)
    ) {
      setThisDate(upMonth(thisDate, 1));
    }
  };

  const handleHoverDate = day => {
    if (iniDate) {
      if (toogleCalendar === 'left') {
        setIniDateHover(setDay(thisDate, day));
      }
      if (toogleCalendar === 'right') {
        setEndDateHover(setDay(thisDate, day));
      }
    }
  };

  const handleLeaveDate = () => {
    setIniDateHover('');
    setEndDateHover('');
  };

  console.log(otherDate);

  return (
    <div className="InputCalendar">
      <div className="InputCalendar__head">
        <span
          className={`InputCalendar__arrow ${
            !(
              new Date(thisDate) < new Date(otherDate) ||
              new Date(upMonth(otherDate, 1)) < new Date(thisDate)
            ) && 'InputCalendar__arrow--disabled'
          }`}
          onClick={() => handleBackMonth()}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </span>
        <span className="InputCalendar__date">
          {monthName} {thisYear}
        </span>
        <span
          className={`InputCalendar__arrow ${
            !(
              new Date(thisDate) > new Date(otherDate) ||
              new Date(downMonth(otherDate, 1)) > new Date(thisDate)
            ) && 'InputCalendar__arrow--disabled'
          }`}
          onClick={() => handleNextMonth()}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </span>
      </div>
      <div className="InputCalendar__body">
        <ul>
          {weekdaysName.map(name => (
            <li key={name} className="InputCalendar__dayname">
              {name}
            </li>
          ))}

          {days.map((day, i) => (
            <li
              key={Math.random()}
              className={`InputCalendar__day ${
                day === 1 && 'InputCalendar__day--first'
              }
              ${
                ((iniDate &&
                  new Date(thisYear, thisMonth, day).toISOString() ===
                    new Date(iniDate).toISOString()) ||
                  (endDate &&
                    new Date(thisYear, thisMonth, day).toISOString() ===
                      getDate(endDate))) &&
                'InputCalendar__day--select'
              }
              ${
                ((iniDate &&
                  new Date(thisYear, thisMonth, day).toISOString() ===
                    new Date(iniDate).toISOString()) ||
                  (iniDateHover &&
                    new Date(thisYear, thisMonth, day).toISOString() ===
                      new Date(iniDateHover).toISOString() &&
                    !(
                      new Date(iniDate) <= new Date(setDay(thisDate, day)) &&
                      new Date(endDate) >= new Date(setDay(thisDate, day))
                    )) ||
                  i === 0 ||
                  (i + startsOn - 1) % 7 === 0) &&
                'InputCalendar__day--radiusleft'
              } ${
                ((endDate &&
                  new Date(thisYear, thisMonth, day).toISOString() ===
                    getDate(endDate)) ||
                  (endDateHover &&
                    new Date(thisYear, thisMonth, day).toISOString() ===
                      new Date(endDateHover).toISOString() &&
                    !(
                      new Date(iniDate) <= new Date(setDay(thisDate, day)) &&
                      new Date(endDate) >= new Date(setDay(thisDate, day))
                    )) ||
                  i === daysOfMonth - 1 ||
                  (i + startsOn) % 7 === 0) &&
                'InputCalendar__day--radiusright'
              }
              ${
                new Date(iniDate) <= new Date(setDay(thisDate, day)) &&
                new Date(endDate) >= new Date(setDay(thisDate, day)) &&
                'InputCalendar__day--paint'
              }
              ${
                toogleCalendar === 'left' &&
                new Date(iniDateHover) <= new Date(setDay(thisDate, day)) &&
                new Date(endDate) >= new Date(setDay(thisDate, day)) &&
                'InputCalendar__day--dashed'
              }
              ${
                toogleCalendar === 'right' &&
                new Date(iniDate) <= new Date(setDay(thisDate, day)) &&
                new Date(endDateHover) >= new Date(setDay(thisDate, day)) &&
                'InputCalendar__day--dashed'
              }
              `}
              starton={startsOn}
              onClick={() => handleSelectDate(day)}
              onMouseEnter={() => handleHoverDate(day)}
              onMouseLeave={() => handleLeaveDate()}
            >
              {!!day && <span>{day}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { InputCalendar };
