Todos.TodoController = Ember.ObjectController.extend({
	actions: {
		editTodo: function () {
			this.set('isEditing', true);
		},
		acceptChanges: function (e) {
			this.set('isEditing', false);
			if (Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else {	
				// it executes this line but it doesn't save
				this.set('model.title', e);
				this.get('model').save();
			}
		}
	},
	isCompleted: function(key, value){
		var model = this.get('model');
		
		if (value === undefined) {
			// property being used as a getter
			return model.get('isCompleted');
		} else {
			// property being used as a setter
			model.set('isCompleted', value);
			model.save();
			return value;
		}
		// What's property?
	}.property('model.isCompleted')
});