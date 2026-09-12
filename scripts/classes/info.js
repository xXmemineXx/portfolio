
class info {
    constructor(title ,image_path, description, type) {
        this.title = title
        this.path = image_path
        this.description = description
        this.type = type

        document.getElementById("topic").innerText = this.title
        document.getElementById("description").innerText = this.description
   }
}