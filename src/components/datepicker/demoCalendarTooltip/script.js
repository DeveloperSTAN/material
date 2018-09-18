angular.module('calendarTooltipDemo', ['ngMaterial'])
  .controller('AppCtrl', function () {

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var moreDate = new Date();
    moreDate.setDate(moreDate.getDate() + 7);
    moreDate.setHours(0, 0, 0, 0);

    this.events = [
      {
        title: 'John doe birythday',
        startDate: today
      },
      {
          title: 'Jane doe birythday',
          startDate: today,
          endDate: moreDate
      },
      {
          title: 'Jane doe birythday',
          startDate: today,
          endDate: moreDate
      }
    ];
  });