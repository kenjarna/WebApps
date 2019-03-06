let expect = chai.expect;
import Score from '../js/score.js';

describe('Score Instances', () => {
	let score;
	beforeEach(()=>{ score = new Score(); });
	it('start with all counts set to zero', () => {
		checkValuesAre(0,0,0,0);
	});
	it('increments using addResult method',()=>{
		score.addResult(Score.ACTION_SWITCH, Score.RESULT_WIN);
		checkValuesAre(1,0,0,0);
		score.addResult(Score.ACTION_SWITCH, Score.RESULT_LOSS);
		checkValuesAre(1,1,0,0);
		score.addResult(Score.ACTION_STAY, Score.RESULT_WIN);
		checkValuesAre(1,1,1,0);
		score.addResult(Score.ACTION_STAY, Score.RESULT_LOSS);
		checkValuesAre(1,1,1,1);

	});
	it('set all counters to 0 using reset method', ()=>{
		score.addResult(Score.ACTION_SWITCH, Score.RESULT_WIN);
		score.addResult(Score.ACTION_SWITCH, Score.RESULT_LOSS);
		score.addResult(Score.ACTION_STAY, Score.RESULT_WIN);
		score.addResult(Score.ACTION_STAY, Score.RESULT_LOSS);
		score.reset();
		checkValuesAre(0,0,0,0);
	});
	function checkValuesAre(switchWins,switchLosses,stayWins,stayLosses) {
		expect(score.switchWins).to.equal(switchWins);
		expect(score.switchLosses).to.equal(switchLosses);
		expect(score.stayWins).to.equal(stayWins);
		expect(score.stayLosses).to.equal(stayLosses);
	};

});
