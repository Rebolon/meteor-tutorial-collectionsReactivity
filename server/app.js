Meteor.startup(function funcServerStartup() {

  Meteor.setInterval(function funcServerAddItemInList() {
    List.insert({'title': new Date(), 'from': 'server script'});
  }, 5000);

});
