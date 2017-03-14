import { Template } from 'meteor/templating';
 
import { Users } from '../api/users.js';

import './form.html';
 
Template.body.events({
	'submit .submitForm'(event){
		    event.preventDefault();
		    const target = event.target;
    		const text = target.name.value;
     		Users.insert({
      			text,
   			 });
   			 target.text.value = '';
	},
});

Template.body.helpers({
  users() {
    return Users.find({});
  },
});