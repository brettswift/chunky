Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/insert_workout', {
  name: 'insertWorkout',
  controller: 'WorkoutsController',
  action: 'insert',
  where: 'client'
});

Router.route('workouts_list', {
  name: 'workoutsList',
  controller: 'WorkoutsController',
  action: 'list',
  where: 'client'
});

Router.route('/workouts/id', {
  name: 'workoutsId',
  controller: 'WorkoutsController',
  action: 'edit',
  where: 'client'
});


Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    this.render('AccessDenied');
  } else
  {
    this.next();
  }
}, {only: ['workoutsList', 'insertWorkout']});
