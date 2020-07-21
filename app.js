/***********************************************************/
/************************ GAME TIME ************************/
/***********************************************************/

// Sketch out our game

// Things we need:
// Need a button to do a day of work
// Option to buy a new tool
// Win Conditions

/**************** DEFINE OUR DOM ELEMENTS ****************/

// Game Stats
const game_day = document.querySelector('#game_day');
const game_balance = document.querySelector('#game_balance');
const game_tool = document.querySelector('#game_tool');
const game_rate = document.querySelector('#game_rate');

// Tool Shop
const rusty_scissors = document.querySelector('#rusty_scissors');
const push_mower = document.querySelector('#push_mower');
const power_mower = document.querySelector('#power_mower');
const student_team = document.querySelector('#student_team');

// Run Day
const run_day = document.querySelector("#run_day");

/**************** DEFINE GAME OBJECTS ****************/

const tools = [
    {
        name: "Teeth",
        cost: 0,
        rate: 1
    },
    {
        name: "Scissors",
        cost: 5,
        rate: 5
    },
    {
        name: "Push Mower",
        cost: 25,
        rate: 50
    },
    {
        name: "Power Mower",
        cost: 250,
        rate: 100
    },
    {
        name: "Student Team",
        cost: 500,
        rate: 250
    }
];

const player = {
    balance: 0,
    currrentTool: tools[0]
}

const game = {
    daysWorked: 0,
    gameWon: false
}

/**************** DEFINE GAME FUNCTIONS ****************/


const runDay = () => {
    if (game.gameWon) {
        alert(`You've already won! Leave some lawns for everyone else (or refresh to start over)`);
    } else {
        player.balance += player.currrentTool.rate;
        game.daysWorked += 1;
        updateStats();
        checkWin();
    }
}

const checkWin = () => {
    if (player.balance >= 1000 && player.currrentTool.name === "Student Team") {
        alert(`You won the game! It took ${game.daysWorked} days to become a landscaper tycoon!`);
        game.gameWon = true;
    }
}

const updateStats = () => {
    game_day.innerHTML = game.daysWorked;
    game_balance.innerHTML = player.balance;
    game_tool.innerHTML = player.currrentTool.name;
    game_rate.innerHTML = player.currrentTool.rate;
}

const buyTool = (tool) => {
    if (player.balance >= tool.cost) {
        alert(`Nice! You just upgraded your tool to ${tool.name}!`);
        player.currrentTool = tool;
        player.balance -= tool.cost;
        updateStats();
    } else {
        alert(`Sorry, you can't afford this tool. Keep mowing lawns!`)
    }
}

const init = () => {
    updateStats();
}

/**************** LINK DOM FUNCTIONS ****************/

run_day.onclick = () => {
    runDay();
}

rusty_scissors.onclick = () => {
    buyTool(tools[1]);
}

push_mower.onclick = () => {
    buyTool(tools[2]);
}

power_mower.onclick = () => {
    buyTool(tools[3]);
}

student_team.onclick = () => {
    buyTool(tools[4]);
}

init();