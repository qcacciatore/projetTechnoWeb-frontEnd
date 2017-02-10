var app = new Vue({
  el: '#characters',
  
  data: {
    characters: {},
    characterId: {},
  },

  mounted:function(){
         this.getAllCharacters() //method1 will execute at pageload
   },
  
  methods: {
    getAllCharacters: function () {
	    this.$http.get('http://localhost:3000/characters').then(function(response) {
	        // Success
	        this.characters = response.body;
	    }, function(response) {
	        // Failure
	        //this.loginError = response.body.data; //recuparation of JSON login error
	    });
	},

	goToCharacterById: function(id) {
		this.$http.get('http://localhost:3000/characters/'+ id).then(function(response) {
	        // Success
	        window.location = "characterId.html";
	        this.characterId = response.body;
	        localStorage.setItem("characterId", this.characterId.id);
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