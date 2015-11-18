/*****************************************************************************/
/* Profile: Event Handlers */
/*****************************************************************************/
Template.profile.events({
});

AutoForm.addHooks(["user-profile-form"], {
  onSuccess: function(operation, result, template) {
    FlashMessages.sendSuccess('Profile Updated Successfully!');
    Router.go("/workouts_list");
  }
});

/*****************************************************************************/
/* Profile: Helpers */
/*****************************************************************************/
Template.profile.helpers({
  user: function(){
    return Meteor.user();
  }
});

/*****************************************************************************/
/* Profile: Lifecycle Hooks */
/*****************************************************************************/
Template.profile.onCreated(function () {
});

Template.profile.onRendered(function () {
});

Template.profile.onDestroyed(function () {
});
