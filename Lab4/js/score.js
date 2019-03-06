export default class Score {
	constructor(){
		this.switchWins = 0;
		this.switchLosses = 0;
		this.stayWins = 0;
		this.stayLosses = 0;
	}
	addResult(action, result){
		if (action == Score.ACTION_SWITCH) {
		    if (result == Score.RESULT_WIN) {
		        this.switchWins += 1;
    		}else{
    			this.switchLosses += 1;
    		}
		}
		if (action == Score.ACTION_STAY){
			if( result == Score.RESULT_WIN){
				this.stayWins +=1;
			}else{
				this.stayLosses +=1;
			}
		}
	}
};

Score.ACTION_SWITCH = 'switch';
Score.RESULT_WIN = 'win';
Score.ACTION_STAY = 'stay';
Score.RESULT_LOSS = 'loss';