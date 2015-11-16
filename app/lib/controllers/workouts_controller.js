WorkoutsController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('workouts', Meteor.userId());
  },
  data: function () {
    return Workouts.findOne({_id: this.params._id});
  },
  insert: function () {
    this.render('InsertWorkout', {});
  },
  list: function() {
    this.render('WorkoutsList', {});
  },
  edit: function() {
    this.render('EditWorkout', {});
  }
});
