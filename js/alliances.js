var app = new Vue({
  el: '#alliances',
  
  data: {
    alliances: {},
    allianceId: {},
  },

  mounted:function(){
         this.getAllAlliances() //method1 will execute at pageload
   },
  
  methods: {
    getAllAlliances: function () {
	    this.$http.get('http://localhost:3000/alliances').then(function(response) {
	        // Success
	        this.alliances = response.body;
	    }, function(response) {
	        // Failure
	        //this.loginError = response.body.data; //recuparation of JSON login error
	    });
	},

	goToAllianceById: function(id) {
		this.$http.get('http://localhost:3000/alliances/'+ id).then(function(response) {
	        // Success
	        window.location = "allianceId.html";
	        this.allianceId = response.body;
	        localStorage.setItem("allianceId", this.allianceId.id);
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