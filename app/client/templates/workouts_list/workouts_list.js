/*****************************************************************************/
/* WorkoutList: Event Handlers */
/*****************************************************************************/
Template.WorkoutsList.events({
});

/*****************************************************************************/
/* WorkoutList: Helpers */
/*****************************************************************************/
Template.WorkoutsList.helpers({
  workouts: function () {
   return Workouts.find();
 },
 workoutDateFormatted: function () {
   return moment(this.workoutDate).format("MMM Do YYYY");
 },
 ratingHigh: function() {
 if (this.priority >= 4)
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
 }
});

/*****************************************************************************/
/* WorkoutList: Lifecycle Hooks */
/*****************************************************************************/
Template.WorkoutsList.onCreated(function () {
});

Template.WorkoutsList.onRendered(function () {
});

Template.WorkoutsList.onDestroyed(function () {
});
