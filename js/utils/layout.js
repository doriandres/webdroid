export class Layout{
    static build(html){
        return document.createRange().createContextualFragment(html).firstElementChild;
    }
}