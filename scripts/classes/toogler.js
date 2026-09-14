
class toogle_item {

    constructor(name, image_path, div) {
        this.name = name
        this.path = image_path
        this.div = div
        
        this.div.innerHTML = "<img src='" + image_path + "'>" +
                            "<p>" + this.name + "</p>"
    }
}