var app = new Vue({
  el: '#characters',
  
  data: {
    characters: {},
    characterId: {},
    errorAdd: null,
    characterAdd: {
		character: {
      		name: '',
      		user_id: '',
      		class: '',
      		position: {
        		x: '',
        		y: ''
      		}
    	}
	}
  },

  mounted:function(){
         this.getAllCharacters() //method1 will execute at pageload
   },
  
  methods: {
    getAllCharacters: function () {
	    this.$http.get('http://localhost:3000/characters').then(function(response) {
	        // Success
	        this.characters = response.body.characters;
	    }, function(response) {
	        // Failure
	        //this.loginError = response.body.data; //recuparation of JSON login error
	    });
	},

	goToCharacterById: function(id) {
		this.$http.get('http://localhost:3000/characters/'+ id).then(function(response) {
	        // Success
	        window.location = "characterId.html";
	        this.characterId = response.body.character;
	        localStorage.setItem("characterId", this.characterId.id);
	    }, function(response) {
	        // Failure
	        //this.loginError = response.body.data; //recuparation of JSON login error
	    });
	},

	addCharacter: function () {
	    this.$http.post('http://localhost:3000/characters', this.characterAdd).then(function(response) {
	        // Success
	        if(response.body.name == "error"){
	        	this.errorAdd = "Please submit relevant data";
	        }else{
	        	this.getAllCharacters();
	        	this.characterAdd.character.name = null;
	        	this.characterAdd.character.user_id = null;
	        	this.characterAdd.character.class = null;
	        	this.characterAdd.character.position.x = null;
	        	this.characterAdd.character.position.y = null;
	        	this.errorAdd = null;
	        }
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