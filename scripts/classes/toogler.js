
class toogle_item {

    constructor(name, image_path, div) {
        this.name = name
        this.path = image_path
        this.div = div
        
        this.div.innerText = name
    }
}