
class list_item {

    constructor(id, description) {
        this.id = id + 1
        this.description = description
        this.div = "<div class='list-item' onclick='display("+ id +")'"
                    +   "<p class='list-id'>"+ this.id +"</p>"
                    +   "<p class='status'>"+ description + "</p>"
                    +"</div>"
    }
}

function display( item_id ){
    console.log(item_id);
    
    switch (current_info.type) {
        case 'about':
            break;
            
        case 'projects':
            document.getElementById("viewd").innerText = projects[item_id]["name"]
            document.getElementById("description").innerText = projects[item_id]["description"]
            break;

        case 'skills':
            document.getElementById("viewd").innerText = skills[item_id]["name"]
            document.getElementById("description").innerText = skills[item_id]["description"]
            break;

        case 'studies':
            document.getElementById("viewd").innerText = studies[item_id]["name"]
            document.getElementById("description").innerText = studies[item_id]["description"]
            break;

        default:
            break;
    }
}