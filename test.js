class test{
    constructor(){
        this.dataloader = new Dataloader();

        this.onload = () => {
            this.data = this.dataloader.data
        }
    }
}