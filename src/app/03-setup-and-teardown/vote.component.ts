export class voteComponent {
    totalVotes = 0;
    upVote(){
        this.totalVotes=this.totalVotes+1;
    }
    downVote(){
        this.totalVotes=this.totalVotes-1;
    }
    
}