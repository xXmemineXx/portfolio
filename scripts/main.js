//==================================================
//==================change topic====================
//=================================================

function change_topic(title)
{
    document.getElementById("topic").innerText = title
}

function toogle(_topic)
{
    change_topic(_topic.name)
    let swap = content

    content = new toogle_item(_topic.name, _topic.path, document.getElementById("view"))
    content.div.innerText = content.name
    _topic.div.innerText = _topic.name
    current_info = new info(content.name, "./media/images/", "description of the current subject", content.name)
    item_list.innerHTML = ""
    item_list2.innerHTML = ""

    for (let i = 0; i < current_info.items.length; i++) {
        if (i >= 6) {
            item_list2.innerHTML += current_info.items[i].div
        } else {
            item_list.innerHTML += current_info.items[i].div
        }
    }

    if (current_info.items.length > 0) {
        display(0)
    } else {
        document.getElementById("viewd").innerText = ""
    }      

    return new toogle_item(swap.name, swap.path, _topic.div)
}

//set toogler's vars
var content = new toogle_item('about', "./media/icons/about.png", document.getElementById("view"))
var topic1 = new toogle_item('skills', "./media/icons/skills.png", document.getElementById("option1"))
var topic2 = new toogle_item('projects', "./media/icons/projects.png", document.getElementById("option2"))
var topic3 = new toogle_item('studies', "./media/icons/studies.png", document.getElementById("option3"))

//initialize current info
var current_info = new info(content.name, "./media/images/", about["description"], content.name)

var item_list = document.getElementById('list')
var item_list2 = document.getElementById('list2')