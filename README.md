Meteor Collections Reactivity
=============================

The aim is to understand how works the Collections reactivity

App will create a "List" collection available both on server and client side. So pub/sub are automaticaly managed by Meteor framework.
Using a Meteor.setInterval, a server script will add new item in collection each 5 seconds.
A button is also available in the GUI to display the content of the collection.

* Start your meteor app.
* Open 2 browsers using the url of the app

You should see a new item appending the list (at the top) in both browser.

* In one of the browser, click on he Add button

You should see the new item appending the list in both browser.

* Open a shell in the server that run the app
* Go to the Meteor app folder
* Run "meteor mongo"
* Do : 
  * use meteor;
  * db.list.insert({'title': new Date(), 'from': 'server mongo shell'});
  
You should see the new item appending the list in both browser.

So you can see that Meteor is able to manage reactivity from its own framework (using the Deps package in a transparent way for us) but also with the mongodb server even if modification to he db are made from somewhere else hatn the Meteor framework.