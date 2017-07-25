$(function() {
	var recipe = {
		coldbrew: {
			'title': 'Cold Brew Coffee Concentrate',
			'serves': 5,
			'prep': ['Active: 20 minutes', 'Passive: 12-14 hours'],
			'ingredients': ['1 cup coffee grounds', '4 cups water', 'milk (optional)', 'liquid sweetener (optional)'],
			'instructions': [
				'Combine coffee grounds and water in a 5 cup container, mixing with a plastic spoon', 
				'Store coffee/water mixture in refrigerator for 12-14 hours', 
				'Cover the mouth of a plastic container, using either cheesecloth or a mesh sieve with a coffee filter inside', 
				'Remove the mixture from the refrigerator, stir with a plastic spoon, and then pour it into the covered container to separate the grounds from the concentrate', 
				'Discard the used grounds and store the cold brew concentrate in the refrigerator (in the container of your choosing)', 
				'To serve, pour over ice and add milk and/or liquid sweetener to taste'
			],
			'notes': [
				'Choose coffee grounds that are lighter than your usual preferred coffee. Single origin coffee grounds are best for this recipe.',
				'This recipe can be increased or decreased based on your needs, but always maintain a 4:1 water to coffee ratio'
			]
		},
		granola: {
			'title': 'Sarah\'s Easy Granola',
			'serves': 10,
			'prep': ['Active: 20 minutes', 'Passive: 35 minutes'],
			'ingredients': ['1/4 cup agave syrup', '1/4 cup clover honey', '1 teaspoon ground cinnamon', '2 tablespoons packed light brown sugar', '1 teaspoon vanilla extract', '1 1/2 cups instant oats', '3/4 cup assorted nuts and seeds'],
			'instructions': [
				'Preheat the oven to 325 degrees F. Line a rimmed baking sheet with parchment paper or a silicone baking mat',
				'Mix the agave syrup, honey, cinnamon, brown sugar and vanilla extract in a small bowl until smooth', 
				'Combine the oats and other fruits and nuts in a large bowl',
				'Add the wet mixture (agave/honey/etc) to the dry mixture (oats) and stir, making sure everything is evenly coated',
				'Spread the mixture evenly on the prepared baking sheet; bake, stirring occasionally, until golden brown and crisp, 25 to 30 minutes',
				'Remove the granola from the oven and let cool slightly, then break into clumps while still warm.'

			],
			'notes': [
				'Feel free to experiment with the ratio of oats to nuts & seeds - see what works best for you!'
			]
		}
	}

	$('img').click(function() {
		clearAll();
		var current = $(this).attr("id");

		$('.title').text(recipe[current]['title']);

		$('.serves').text('Servings: ' + recipe[current]['serves']);
		
		$('.prep-into').text('Prep Time:');
		$('.prep').append('<li>' + recipe[current]["prep"][0] + '</li>');
		$('.prep').append('<li>' + recipe[current]["prep"][1] + '</li>');
		console.log('prep appended')
		
		$('.ingred-into').text('Ingredients:')
		for (var x = 0; x< recipe[current]['ingredients'].length; x++) {
			$('.ingredients').append('<li>' + recipe[current]["ingredients"][x] + '</li>')
		};

		$('.instruct-into').text('Instructions:');
		for (var y = 0; y < recipe[current]['instructions'].length; y++) {
			$('.instructions').append('<li>' + recipe[current]["instructions"][y] + '</li>')
			console.log('instruction number' + y)	
		};

		$('.note-into').text('Notes:');
		for (var z = 0; z < recipe[current]['notes'].length; z++) {
			$('.notes').append('<li>' + recipe[current]["notes"][z] + '</li>')	
		};

	});

	function clearAll() {
		$("li").remove();
	}
});