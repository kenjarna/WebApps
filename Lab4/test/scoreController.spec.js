import Score from '../js/score.js';
import ScoreController from '../js/scoreController.js';
import Spy from './spy.js';
import Observable from '../js/observable.js';

let expect = chai.expect;

class FakeScorecardUI extends Observable {
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
	it('call the ui update when the model triggers a change', done => {
	    let spy = new Spy(ui, 'update', (field, value) => {
	        expect(field).to.equal('switchWins');
	        expect(value).to.equal(score.switchWins);
	        done();
    	});
	    score.trigger('change', 'switchWins', score.switchWins);
	});
	it('register to listen to ui resetRequested', () => {
	   let spy = new Spy(ui, 'on');
	   new ScoreController(score,ui);
	   expect(spy.numberOfCalls()).to.equal(1);
	});
	it('call the model reset method when the ui triggers resetRequested', (done) => {
	   	let spy = new Spy(score, 'reset', done());
	   	ui.trigger('resetRequested');
	});
});