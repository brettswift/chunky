/*****************************************************************************/
/* InsertWorkout: Event Handlers */
/*****************************************************************************/
Template.InsertWorkout.events({
});

AutoForm.addHooks(["insertWorkoutForm"], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Workout Added! Keep on givin er');
  }
});

/*****************************************************************************/
/* InsertWorkout: Helpers */
/*****************************************************************************/
Template.InsertWorkout.helpers({
});

/*****************************************************************************/
/* InsertWorkout: Lifecycle Hooks */
/*****************************************************************************/
Template.InsertWorkout.onCreated(function () {
});

Template.InsertWorkout.onRendered(function () {
});

Template.InsertWorkout.onDestroyed(function () {
});
