function librarySystem() {
    let username = prompt("Enter username:");
    let password = prompt("Enter password:");
    if (username === "library" && password === "book123") {
        let borrow = confirm("Do you want to borrow a book?");
        if (borrow) {
            let category = prompt("Enter book category:\n1 = Fiction\n2 = Science\n3 = History");
            category = Number(category);
            switch (category) {
                case 1:
                    alert("You selected Fiction");
                    break;
                case 2:
                    alert("You selected Science");
                    break;
                case 3:
                    alert("You selected History");
                    break;
                default:
                    alert("Invalid category!");
            }
        } else {
            alert("Maybe next time! Goodbye!");
        }
    } else {
        alert("Invalid login!");
    }
}
librarySystem();
