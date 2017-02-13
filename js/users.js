var app = new Vue({
  el: '#users',
  
  data: {
    users: {},
    errorAdd: null,
    userId: {},
    userAdd: {
		user : {
      		name: '',
      		email: '',
      		alliance_id: ''
    	}
	}
  },

  mounted:function(){
         this.getAllUsers() //method1 will execute at pageload
   },
  
  methods: {
    getAllUsers: function () {
	    this.$http.get('http://localhost:3000/users').then(function(response) {
	        // Success
	        this.users = response.body.users;
	    this.$http.get('http://localhost:3000/alliances').then(function(response){
			for (var i = this.users.length - 1; i >= 0; i--) {
				for (var j = response.body.alliances.length - 1; j >= 0; j--) {
					if(this.users[i].alliance_id == response.body.alliances[j].id)
						this.users[i].alliance_id = response.body.alliances[j].name;
				};
			};
	    	}, function(response) {
	        	// Failure
	    	});

		}, function(response){
            	//Failure
            });
	},

	goToUserById: function(id) {
		this.$http.get('http://localhost:3000/users/'+ id).then(function(response) {
	        // Success
	        window.location = "userId.html";
	        this.userId = response.body.user;
	        localStorage.setItem("userId", this.userId.id);
	    }, function(response) {
	        // Failure
	        //this.loginError = response.body.data; //recuparation of JSON login error
	    });
	},

	addUser: function () {
	    this.$http.post('http://localhost:3000/users', this.userAdd).then(function(response) {
	        // Success
	        if(response.body.name == "error"){
	        	this.errorAdd = "Please submit relevant data";
	        }else{
	        	this.getAllUsers();
	        	this.userAdd.user.name = null;
	        	this.userAdd.user.email = null;
	        	this.userAdd.user.alliance_id = null;
	        	this.errorAdd = null;
	        }
	    }, function(response) {
	        // Failure
	        this.errorAdd = "Please submit relevant data";
	    });
	},

	test: function() {
		alert("Test");
	}
  }
})