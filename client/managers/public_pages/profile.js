Template.profile.helpers({
	studentName: function() {
		return Session.get('fname');
	}
});