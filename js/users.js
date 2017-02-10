var app = new Vue({
  el: '#app',
  
  data: {
    users: {},
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

	test: function() {
		alert("Test");
	}
  }
})