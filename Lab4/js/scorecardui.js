export default class ScorecardUI {
	constructor($el){
		this.$el = $el;
	}
	initialize(o) {
    	this.$el.html(template(o));
	}
}

function template(o) {
	return `
		<input type="button" id="resetButton" value="Reset"></input>
		<div class="scoreSection"><h2>SWITCH</h2>
		   <label for="switchWins" >Wins:
		      <input type="text" id="switchWins" name="switchWins" value="${o.switchWins}"></input>
		   </label>
		   <label for="switchLosses" >Losses:
		      <input type="text" id="switchLosses" name="switchLosses" value="${o.switchLosses}"></input>
		   </label>
		</div>
		<div class="scoreSection"><h2>STAY</h2>
		   <label for="stayWins" >Wins:
		      <input type="text" id="stayWins" name="stayWins" value="${o.stayWins}"></input>
		   </label>
		   <label for="switchLosses" >Losses:
		      <input type="text" id="stayLosses" name="stayLosses" value="${o.stayLosses}"></input>
		   </label>
		</div>
		`;
}