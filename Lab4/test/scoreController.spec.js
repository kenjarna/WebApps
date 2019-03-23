import Score from '../js/score.js';
import ScoreController from '../js/scoreController.js';
import Spy from './spy.js';

let expect = chai.expect;

class FakeScorecardUI {
   initialize(o) {}
   update(field, newValue) {}
}

describe('ScoreController instances', () => {
   let score;
   let controller;
   let ui;
	beforeEach(function() {
	   score = new Score();
	   ui = new FakeScorecardUI();
	   controller = new ScoreController(score, ui);
	});
	it('register to listen to score changes', () => {
	   let spy = new Spy(score, 'on');
	   new ScoreController(score,ui);
	   expect(spy.numberOfCalls()).to.equal(1);
	   let [topic, handler] = spy.argumentsOfCall(0);
	   expect(topic).to.equal('change');
	});

	it('initialize the ui when they start', () => {
	   let spy = new Spy(ui, 'initialize');
	   new ScoreController(score, ui);
	   expect(spy.numberOfCalls()).to.equal(1);
	   expect(spy.argumentsOfCall(0)).to.deep.equal([score]);
	});
});