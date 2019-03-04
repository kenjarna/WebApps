let expect = chai.expect;
import Score from '../js/score.js';

describe('Score Instances', () => {
   it('start with all counts set to zero', () => {
      let score = new Score();
      expect(score.switchWins).to.equal(0);
      expect(score.switchLosses).to.equal(0);
      expect(score.stayWins).to.equal(0);
      expect(score.stayLosses).to.equal(0);
   });

});
