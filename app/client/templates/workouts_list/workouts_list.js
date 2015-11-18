/*****************************************************************************/
/* WorkoutList: Event Handlers */
/*****************************************************************************/
Template.WorkoutsList.events({
});

/*****************************************************************************/
/* WorkoutList: Helpers */
/*****************************************************************************/
Template.WorkoutsList.helpers({
 workoutDateFormatted: function () {
   return moment(this.workoutDate).format("MMM Do YYYY");
 },
 ratingHigh: function() {
 if (this.rating >= 4)
     return true;
   else
     return false;
 },
 ratingMedium: function() {
   if (this.rating === 3)
     return true;
   else
     return false;
 },
 ratingLow: function() {
   if (this.rating <= 2)
     return true;
   else
     return false;
 },
 totalWorkoutCount: function (){
  return Session.get("totalWorkoutCount");
},
progress: function (){
  // var totalMin = this.totalWorkoutMinutes.get()
  var totalMin = Session.get("totalWorkoutMinutes");
  var quota = Meteor.user().profile.quota
  var percent =  totalMin / quota * 100;

  var dayOfWeek = new Date().getDay() + 1;
  var weekProgress =  dayOfWeek / 7 * 100;
  var differential = percent / weekProgress;

  var style;
  if (differential < 1) { style = "warning"}
  if (differential < 0.70) { style = "danger"}
  if (differential > 1) { style = "success"}

  return {
    "percent"     : percent,
    "style"       : style,
    "weekProgress": weekProgress,
    "totalMinutes": totalMin,
    "testvar"     : differential
  }
}
,workouts: function () {

  var d = new Date();
  var day = d.getDay()
  var sundayDate = d.getDate() - day;
  var sunday = new Date(d.setDate(sundayDate));
  var saturday = new Date(d.setDate(sundayDate +7));
  sunday.setHours(0,0,0,0);
  saturday.setHours(0,0,0,0);
  saturday.setSeconds(-1);
  console.log("sunday: " + sunday);
  console.log("saturday: " + saturday);

  // var today = new Date();
  // today = new Date('2015', '09', '12')
  thisWeeksWorkouts =  Workouts.find({
    workoutDate: {$gte: sunday, $lte: saturday}
  })

  return thisWeeksWorkouts;
  }
});

/*****************************************************************************/
/* WorkoutList: Lifecycle Hooks */
/*****************************************************************************/
Template.WorkoutsList.onCreated(function () {
  this.workoutTotals = new ReactiveVar( false );
});


Template.WorkoutsList.onRendered(function () {
  Meteor.call("workoutTotals", function(error, totals){
    if(error){
      //  console.log(error.reason);
       return;
     }
    Session.set('totalWorkoutMinutes', totals.sum);
    Session.set('totalWorkoutCount', totals.count);
  });
  this.totalWorkoutMinutes = new ReactiveVar(false);
});

Template.WorkoutsList.onDestroyed(function () {
});
