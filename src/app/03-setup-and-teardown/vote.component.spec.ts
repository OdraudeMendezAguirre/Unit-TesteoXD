import { voteComponent } from './vote.component';

describe ('voteComponent',() => {
    let component: voteComponent;
    beforeEach(()=>{
        component= new voteComponent();
    });
    
    it('deveria incrementar',() =>{  
        component.upVote();
        expect(component.totalVotes).toBe(1);
    });
    it('deveria incrementar',() =>{
        component.downVote();
        expect(component.totalVotes).toBe(-1);
    });
});