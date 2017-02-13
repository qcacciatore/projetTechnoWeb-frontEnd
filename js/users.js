var app = new Vue({
  el: '#users',
  
  data: {
    users: {},
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
	    }, function(response) {
	        // Failure
	        //this.loginError = response.body.data; //recuparation of JSON login error
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
	        this.getAllUsers();
	        this.userAdd.user.name = null;
	        this.userAdd.user.email = null;
	        this.userAdd.user.alliance_id = null;
	    }, function(response) {
	        // Failure
	        console.log("failed");
	    });
	},

	test: function() {
		alert("Test");
	}
  }
})