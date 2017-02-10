var app = new Vue({
  el: '#allianceId',
  
  data: {
    allianceId: {},
  },

  mounted:function(){
         this.getAllianceById() //method1 will execute at pageload
   },
  
  methods: {
	getAllianceById: function(id) {
		this.$http.get('http://localhost:3000/alliances/'+ localStorage.getItem("allianceId")).then(function(response) {
	        // Success
	        this.allianceId = response.body;
	        
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