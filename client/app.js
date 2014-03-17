Template.main.helpers({
  'list': function funcTplMainHelperList() {
    return List.find({}, {'sort': {'title': -1}});
  }
});

Template.main.events({
  'click input': function () {
    List.insert({'title': new Date(), 'from': 'client button'});
  }
});

