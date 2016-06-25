function Herb (name, amount, incAmount, rate, price, sellRate, unlocked) {
	this.name = name;
	this.amount = amount;
	this.incAmount = incAmount;
	this.rate = rate;
	this.price = price;
	this.sellRate = sellRate;
	this.sellAmount = 1;
	this.unlocked = unlocked;
	this.procStage = 0;
	this.procTimeLeft = 0;
	console.log('Herb instantiated ' + this.name + ' ' + this.amount + ' ' + this.incAmount + ' ' + this.rate + ' ' + this.price + ' ' + this.sellRate + ' ' + this.sellAmount + ' ' + this.unlocked + '.');
};

Herb.prototype.addHerbsIncAmount = function() {
	var beforeAmount = this.amount;
	this.amount = beforeAmount + this.incAmount;
	console.log('Added ' + this.incAmount + ' of ' + this.name + '. From ' + beforeAmount + ' to ' + this.amount);
}

Herb.prototype.addHerbsByAmount = function(amount) {
	var beforeAmount = this.amount;
	this.amount = beforeAmount + amount;
	console.log('Added ' + this.incAmount + ' of ' + this.name + '. From ' + beforeAmount + ' to ' + this.amount);
}

Herb.prototype.sellHerbsSellAmount = function () {
	var beforeAmount = this.amount;
	this.amount = beforeAmount - this.sellAmount;
	// Gold.amount = Gold.amount + this.price;
	console.log('Sold ' + this.sellAmount + ' of ' + this.name + '. From ' + beforeAmount + ' to ' + this.amount);
}

Herb.prototype.sellHerbsByAmount = function (saleAmount) {
	var beforeAmount = this.amount;
	this.amount = beforeAmount - saleAmount;
	// Gold.amount = Gold.amount + this.price;
	console.log('Sold ' + this.sellAmount + ' of ' + this.name + '. From ' + beforeAmount + ' to ' + this.amount);
}

Herb.prototype.procHerb = function () {	
	setInterval(function () {
		if (this.procStage > 0) // if proc started yet
		{
			if(this.procStage == 1) // if in stage 1
			{
				// move forward 1 second, check time left, advance to stage 2 or take another step in stage 1
				this.procTimeLeft -=1;
				if (this.procTimeLeft <= 0)
				{
					this.procStage = 2;
				}
			}
			if(this.procStage == 2)
			{
			
			}
		}
		else
		{
			// start proc stage
		}
	}, 1000, (stageLength+1));
}