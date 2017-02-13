var app = new Vue({
  el: '#userId',
  
  data: {
    userId: {},
  },

  mounted:function(){
         this.getUserById() //method1 will execute at pageload
   },
  
  methods: {
	getUserById: function(id) {
		this.$http.get('http://localhost:3000/users/'+ localStorage.getItem("userId")).then(function(response) {
	        // Success
	        this.userId = response.body.user;
	        
	    this.$http.get('http://localhost:3000/alliances').then(function(response){
				for (var j = response.body.alliances.length - 1; j >= 0; j--) {
					if(this.userId.alliance_id == response.body.alliances[j].id)
						this.userId.alliance_id = response.body.alliances[j].name;
				};
	    	}, function(response) {
	        	// Failure
	    	});

		}, function(response){
            	//Failure
            });
	},

	deleteUser: function() {
		this.$http.delete('http://localhost:3000/users/'+ localStorage.getItem("userId")).then(function(response) {
	        // Success
	        alert("User deleted :)");
	        window.location = "users.html";
	        
	    }, function(response) {
	        // Failure
	        //this.loginError = response.body.data; //recuparation of JSON login error
	    });
	},

	test: function() {
		alert("Test");
	}
  }
})