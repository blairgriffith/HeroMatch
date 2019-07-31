import Home from './components/home';
import GameQuiz from './components/gameQuiz';
import CharacterQuiz from './components/characterQuiz';

console.log("app.js");

pageBuild();

function pageBuild(){
    home();
    characterQuiz();
    
};

function home(){
    const body = document.getElementById('root');
    const home = document.getElementById('nav_home');
    home.addEventListener('click', function(){
        body.innerHTML = Home();
    });
};

function characterQuiz(){
    let difficulty = 0;
    let role = 0;
    let subrole = 0;

    document.getElementById('quizbutton').addEventListener('click', function(){
        document.getElementById('quiz').innerHTML = CharacterQuiz();
    })

    document.querySelector('#quiz').addEventListener('click', function(){
        if(event.target.classList.contains('diffOption')){
            difficulty = event.target.value
            console.log(difficulty)
            console.log(role)
            console.log(subrole)
        }

        if(event.target.classList.contains('roleOption')){
            role = event.target.value
            console.log(difficulty)
            console.log(role)
            console.log(subrole)
        }
        
        if(event.target.classList.contains('subRoleOption')){
            subrole = event.target.value
            console.log(difficulty)
            console.log(role)
            console.log(subrole)
        }
    })

};

