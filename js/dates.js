// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December',
// ];

// const days = [
//     'Sunday',
//     'Monday',
//     'Tuesday',
//     'Wednesday',
//     'Thursday',
//     'Friday',
//     'Saturday',
//   ];
  
// const weekends = ['Saturday', 'Sunday'];



//STEP 1


// const numberOfDaysInMonth = () => {
//     const monthSelectorValue = document.getElementById('monthSelector').value;
  
//     const numberOfYear = Number(monthSelectorValue.split('-')[0]);
//     const numberOfMonth = Number(monthSelectorValue.split('-')[1]);
  
//     const daysInMonth = new Date(numberOfYear, numberOfMonth,
//   const daysInMonth = new Date(numberOfYear, numberOfMonth, 0).getDate();
  
//     console.log(`There are ${daysInMonth} days in ${months[numberOfMonth - 1]}`);
// };



//STEP 2

// const nameOfMonthFromDate = () => {
//     const dateSelectorValue = document.getElementById('dateSelector').value;
  
//     const numberOfMonth = Number(dateSelectorValue.split('-')[1]);
  
//     console.log(`The name of the month is ${months[numberOfMonth - 1]}`);
// };



//STEP 3

// const checkWeekend = () => {
//     const dateSelectorValue = document.getElementById('dateSelector').value;
  
//     const numberOfDay = new Date(dateSelectorValue).getDay();
  
//     const isWeekend = weekends.includes(days[numberOfDay]);
  
//     console.log(
//       `The selected date (${dateSelectorValue}) is ${
//         isWeekend ? 'a weekend' : 'not a weekend'
//       }`
//    );
// };



//STEP 4

// const displayYesterday = () => {
//     const dateSelectorValue = document.getElementById('dateSelector').value;
  
//     const todayDate = new Date(dateSelectorValue);
//     const yesterdayDate = new Date(todayDate.setDate(todayDate.getDate() - 1));
  
//     const yesterdayDay = days[yesterdayDate.getDay()];
  
//     console.log(`Yesterday was ${yesterdayDay}`);
// };


//STEP 5
// const getFirstLetterOfCurrentDay = () => {
//     const todayDate = new Date();
//     const todayDayNumber = todayDate.getDay();
  
//     const nameOfTodayDay = days[todayDayNumber];
  
//     const firstLetterOfToday = nameOfTodayDay.slice(0, 1);
  
//     console.log(`The first letter of today is ${firstLetterOfToday}`);
//   };
  
// getFirstLetterOfCurrentDay();