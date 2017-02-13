var app = new Vue({
  el: '#characterId',
  
  data: {
    characterId: {},
    characterX: null,
    characterY: null,
  },

  mounted:function(){
         this.getCharacterById(); //method1 will execute at pageload
   },
  
  methods: {
	getCharacterById: function(id) {
		this.$http.get('http://localhost:3000/characters/'+ localStorage.getItem("characterId")).then(function(response) {
	        // Success
	        this.characterId = response.body.character;
	        this.characterX = this.characterId.position.x;
	        this.characterY = this.characterId.position.y;
	        
	        var myLatLng = {lat: this.characterX, lng: this.characterY};
			var map = new google.maps.Map(document.getElementById('googleMap'), {
    			zoom: 12,
    			center: myLatLng
  			});

  			var marker = new google.maps.Marker({
    			position: myLatLng,
    			map: map,
    			title: 'Position of the character'
  			});
	    	this.$http.get('http://localhost:3000/users').then(function(response){
				for (var j = response.body.users.length - 1; j >= 0; j--) {
					if(this.characterId.user_id == response.body.users[j].id)
						this.characterId.user_id = response.body.users[j].name;
				};
	    	}, function(response) {
	        	// Failure
	    	});

		}, function(response){
            	//Failure
            });
	},

	deleteCharacter: function() {
		this.$http.delete('http://localhost:3000/characters/'+ localStorage.getItem("characterId")).then(function(response) {
	        // Success
	        alert("Character deleted :)");
	        window.location = "characters.html";
	        
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