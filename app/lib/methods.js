/*****************************************************************************/
/*  Client and Server Methods */
/*****************************************************************************/

Meteor.methods({
  'lib/method_name': function () {

    if (this.isSimulation) {
    //   // do some client stuff while waiting for
    //   // result from server.
    //   return;
    }
    // server method logic
  }
});


dateSpan = function(date){

  var day = date.getDay()
  var sundayDate = date.getDate() - day;
  var sunday = new Date(date.setDate(sundayDate));
  var saturday = new Date(date.setDate(sundayDate +7));
  sunday.setHours(0,0,0,0);
  saturday.setHours(0,0,0,0);
  saturday.setSeconds(-1);

  return {"firstDay": sunday, "lastDay": saturday}
};
