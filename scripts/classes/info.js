
class info {
    constructor(title ,image_path, description, type) {
        this.title = title
        this.path = image_path
        this.description = description
        this.type = type
        this.items = []

        document.getElementById("topic").innerText = this.title
        document.getElementById("description").innerText = this.description

        switch (type) {
            case 'about':
                console.log(about);
                break;
            
            case 'projects':
                console.log(projects);
                this.items = []

                for (let i = 0; i < projects.length; i++) {
                    this.items.push(new list_item(i, projects[i]["name"]))
                }
                break;
            
            case 'skills':
                console.log(skills);
                 this.items = []

                for (let i = 0; i < skills.length; i++) {
                    this.items.push(new list_item(i, skills[i]["name"]))
                }
                break;
            
            case 'studies':
                console.log(studies);
                 this.items = []

                for (let i = 0; i < studies.length; i++) {
                    this.items.push(new list_item(i, studies[i]["name"]))
                }
                break;

            default:
                break;
        }
   }
}
