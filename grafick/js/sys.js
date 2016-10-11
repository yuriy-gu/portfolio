var ratings = [
    {name: 'alex1', score:10},
    {name: 'alex2', score:20},
    {name: 'alex3', score:35},
    {name: 'alex4', score:49},
    {name: 'alex5', score:56},
    {name: 'alex6', score:65},
    {name: 'alex7', score:74},
    {name: 'alex8', score:88},
    {name: 'alex9', score:81},
    {name: 'alex10', score:40}
];

var ratingEffect = {
    maxScore: 100,
    kuda: document.getElementById('rating'),
    generateShadow: function(maxScore, height, currentScore){
       var shadowHeight = height * currentScore / 100;
        return shadowHeight;
    },
    appendRating: function(ratings){
        for (var i = 0; i<ratings.length; i++){
            var ratingBlock = document.createElement('div');
            ratingBlock.classList.add('rating__block');
            
            var scoreBlock = document.createElement('div');
            scoreBlock.classList.add('rating__block__score');
            scoreBlock.innerHTML = '<span>' + ratings[i].score + '/' + this.maxScore + '</span>';
            
            var shadowBlock = document.createElement('div');
            shadowBlock.classList.add('rating__block__effect');
            
            var nameBlock = document.createElement('div');
            nameBlock.classList.add('rating__block__name');
            nameBlock.innerHTML = '<span>' + ratings[i].name + '</span>';
            
            ratingBlock.appendChild(scoreBlock);
            ratingBlock.appendChild(shadowBlock);
            ratingBlock.appendChild(nameBlock);
            
            this.kuda.appendChild(ratingBlock);


            //shadowBlock.style.boxShadow = '#15fda9 0px ' + '-' + this.generateShadow(this.maxScore, shadowBlock.offsetHeight, ratings[i].score) + 'px 0px inset';

            shadowBlock.style.transition = 'all ' + Math.round(Math.random() * 5000 + 500) + 'ms ease-in-out';
            shadowBlock.style.boxShadow = '#15fda9 0px ' + '-' + this.generateShadow(this.maxScore, shadowBlock.offsetHeight, ratings[i].score) + 'px 0px inset';
        }
    }
};


