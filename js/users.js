var app = new Vue({
  el: '#users',
  
  data: {
    users: {},
    userId: {},
  },

  mounted:function(){
         this.getAllUsers() //method1 will execute at pageload
   },
  
  methods: {
    getAllUsers: function () {
	    this.$http.get('http://localhost:3000/users').then(function(response) {
	        // Success
	        this.users = response.body;
	    }, function(response) {
	        // Failure
	        //this.loginError = response.body.data; //recuparation of JSON login error
	    });
	},

	goToUserById: function(id) {
		this.$http.get('http://localhost:3000/users/'+ id).then(function(response) {
	        // Success
	        window.location = "userId.html";
	        this.userId = response.body;
	        localStorage.setItem("userId", this.userId.id);
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