document.write('<p>If you can see this, your quiz script is set up!</p>');
	console.log("Hello, welcome to Quizzical");

	var team = prompt("What is your team?");
			position = prompt("What position do you play?");
			game = Number(prompt("How many games have you played?"));
			

	if(position == "Quarterback") {
		passing = Number(prompt("How many yards have you thrown for?"));
		rushing = Number(prompt("How many yards have you rushed for?"));
		rushing_yards_per_game = rushing/game;
		passing_yards_per_game = passing/game;
		alert("Your average rushing yards per game is " + rushing_yards_per_game);
		alert("Your average passing yards per game is " + passing_yards_per_game);
	}

	else if(position == "Running Back") {
		rushing = Number(prompt("How many yards have you rushed for?"));
		receiving = Number(prompt("How many yards have you received for?"));
		rushing_yards_per_game = rushing/game;
		receiving_yards_per_game = receiving/game;
		alert("Your average rushing yards per game is " + rushing_yards_per_game);
		alert("Your average receiving yards per game is " + receiving_yards_per_game);
	}

	else if(position == "Wide Receiver") {
		receiving = Number(prompt("How many yards have you received for?"));
		receiving_yards_per_game = receiving/game;
		alert("Your average receiving yards per game is " + receiving_yards_per_game);
	}