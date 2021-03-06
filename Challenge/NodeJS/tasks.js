
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
var myArray = ['wake up early', 'dance class', 'complete the drawing', 'go shopping'];

function onDataReceived(text) {
  if (text === 'exit\n') {
    quit();
  }
  if (text === 'quit\n') {
    quit();
  }
  else if(text.trim().substring(0, 5) === 'hello'){
    hello(text);
  }
  else if(text.trim().substring(0, 4) === 'help'){
    help(text);
  }
  else if (text.trim().substring(0, 3) === 'add') {
    add(text);
  }
  else if (text === 'remove\n') {
    remove();
  }
  else if (text === 'remove 1\n') {
    remove1();
  }
  else if (text === 'remove 2\n') {
    remove2();
  }
  else if (text === 'list\n') {
    list();
  }
  else if(text === 'edit\n'){
    edit();
}
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}



/**
 * Says hello
 *console.log at the top of the function and then test writing things in the running software to see how that works
 * @returns {void}
 */
function hello(c){
  console.log(c.trim() + '!')
}

/**
 * Open Help page
 *
 * @returns {void}
 */
function help(t){
  var x = 
  "if you want to quit press exit or quit \nif you want to say hello just say it \nif you need help just ask for it \ntype list to check your schedule \ntype add to add items in your schedule \nyou can remove the lat item from your schedule by typing remove \nto remove the first item from your list type remove 1 \nto remove your second item type remove 2"
  console.log(t.trim() + '!\n'+x)
}

/**
 * add 
 *
 * @returns {void}
 */
function add(t){
  myArray.push(t.trim().substring(3,t.trim().length))
}

/**
 * remove 
 *
 * @returns {void}
 */
function remove(){
      myArray.pop()
    }

function remove1(){
  myArray.shift()
}
function remove2(){
  myArray.splice(1, 1)
}
function edit(){
  console.log(edit)
}
/**
 * list 
 *
 * @returns {void}
 */
function list(){
  for (var i = 0; i < myArray.length; i++) {
    console.log((i+1)*1+'-'+myArray[i]);
}
}

/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}

// The following line starts the application
startApp("Maya Dihny")
