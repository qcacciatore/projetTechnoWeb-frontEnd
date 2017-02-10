var app = new Vue({
  el: '#characterId',
  
  data: {
    characterId: {},
    characterX: null,
    characterY: null,
  },

  mounted:function(){
         this.getCharacterById() //method1 will execute at pageload
   },
  
  methods: {
	getCharacterById: function(id) {
		this.$http.get('http://localhost:3000/characters/'+ localStorage.getItem("characterId")).then(function(response) {
	        // Success
	        this.characterId = response.body;
	        this.characterX = this.characterId.position.x;
	        this.characterY = this.characterId.position.y;
	        
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