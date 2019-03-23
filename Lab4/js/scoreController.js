export default class ScorecardController {
	constructor(score, ui) {
	    this.score = score;
	    this.ui = ui;
	    this.ui.initialize(score);
	    this.score.on('change', (property, value) => this.modelChanged(property, value));
	    this.ui.on(() => this.resetRequested());
	}

	modelChanged(property, value) {
	   this.ui.update(property, value);
	}
	resetRequested() {
		this.score.reset();
	}

}