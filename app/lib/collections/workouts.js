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
  // TODO: use simple date picker
  // TODO: default workoutDate to today.
  // TODO: validation of date
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



Meteor.methods({
 //  addWorkout: function(workout) {
 //    if(!Meteor.userId()){
 //      throw new Meteor.Error("not-authorized");
 //    }
 //    console.log("saving workout:");
 //    console.log(Meteor.user());
 //    console.log(JSON.stringify(workout));
 //    Workouts.insert({
 //      date: workout.date,
 //      minutes: workout.minutes,
 //      owner: Meteor.userId(),
 //      createdAt: new Date()
 //    });
 //  },
 //  insertWorkout: function(doc) {
 //   // Important server-side check for security and data integrity
 //   check(doc, Schema.Workouts);
 //   this.unblock();
 //
 //   console.log("inserting workout:");
 //   console.log(Meteor.user());
 //   console.log(JSON.stringify(doc));
 //   Workouts.insert({
 //     date: doc.date,
 //     minutes: doc.minutes,
 //     owner: Meteor.userId(),
 //     createdAt: new Date()
 //   });
 //
 // },
 //  deleteWorkout: function (workoutId) {
 //     Workouts.remove(workoutId);
 //   },
 //  setWorkout: function (workout) {
 //     Workouts.update(workout._id,
 //       {
 //         date: workout.date,
 //         minutes: workout.minutes
 //       }
 //     );
 //   },
   workoutTotals: function (){
      var sum=0;
      var count=0;

      var span = dateSpan(new Date())
      var cursor=Workouts.find({
        createdBy: Meteor.userId(),
        workoutDate: {$gte: span.firstDay, $lte: span.lastDay}
      });
      cursor.forEach(function(workout){
        var min = parseInt(workout.minutes);
        sum = sum + min
        count += 1
      });
      // debugger;
      return {"sum": sum, "count": count};
   }
})
