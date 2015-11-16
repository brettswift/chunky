
Meteor.publish('workouts', function (userId) {
 return Workouts.find({createdBy: userId});
});
