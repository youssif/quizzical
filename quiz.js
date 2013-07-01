document.write('<p>If you can see this, your quiz script is set up!</p>');
console.log("Hello, welcome to Quizzical");

var name = prompt("What is your name?");
	  budget_in_dollars = Number(prompt("What is your budget?"));
	  email = prompt("What is your email?");
	  timeline_in_months = Number(prompt("What is your timeline?"));
		monthly_budget = budget_in_dollars/timeline_in_months;

	  alert("Your monthly budget is " + monthly_budget);

incomes = []
while(income = prompt('What is your source of monthly income? [leave blank to continue]')){
	  incomes.push(income);
}

resulting_income_description = 'Your monthly income stems from';

for(i=0; i < incomes.length; i++){
	resulting_income_description = resulting_income_description + ' ' + incomes[i];
	alert(resulting_income_description);
}



