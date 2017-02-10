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
	        this.userId = response.body;
	        
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