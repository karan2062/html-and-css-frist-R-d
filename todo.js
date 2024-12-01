let todo = [];
let reequest = prompt("Enter your request");
while (true) {
    if (reequest == "quit" || reequest == "QUIT") {
        console.log("You had quited");
        break;
    }

    if (reequest == "list") {
        console.log("---------");

        for (tasks of todo);
        {
            console.log(tasks);
        }
        console.log("---------");
    } else if (reequest == "add") {
        let task = prompt("Enter your tasks ");
        todo.push(task);
        console.log("Task added");
    }
    reequest = prompt("Enter your request");
}