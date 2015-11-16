Workouts = new Mongo.Collection('workouts');

Workouts.attachSchema(new SimpleSchema({
  minutes:{
    type: Number,
    label: "Workout Length (min)",
    min: 10,
    max: 1024
  },
  //TODO: use this? https://atmospherejs.com/andrei/autoform-raty
  rating:{
    type: Number,
    label: "Rate the workout with Stars",
    min: 1,
    max: 5
  },
  workoutDate:
  {
    type: Date,
    label: "Date Of Workout"
    // autoValue: new Date().toJSON()
  },
  createdBy: {
    type: String,
    autoValue: function() {
    return this.userId
  }
}}));

if (Meteor.isServer) {
  Workouts.allow({
    insert: function (userId, doc) {
      return userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userId;
    },

    remove: function (userId, doc) {
      return userId;
    }
  });

}
