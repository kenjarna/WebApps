let expect = chai.expect;
import Score from '../js/score.js';

describe('Score Instances', () => {
	let score;
	beforeEach(()=>{ score = new Score(); });
	it('start with all counts set to zero', () => {
		checkValuesAre(0,0,0,0);
	});
	function checkValuesAre(switchWins,switchLosses,stayWins,stayLosses) {
		expect(score.switchWins).to.equal(switchWins);
		expect(score.switchLosses).to.equal(switchLosses);
		expect(score.stayWins).to.equal(stayWins);
		expect(score.stayLosses).to.equal(stayLosses);
	};

});
