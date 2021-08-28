class Form{
    constructor(){
        this.intro1=createElement('h1')
        this.next=createButton('NEXT')
        this.next2=createButton("Next")
    }            
        display(){
            this.intro1.html("hello")
            
            function show(){
            next.show()
            intro1.show()
            next2.show()
            }


            //POS
            this.intro1.position(windowWidth/2, 50)
            this.next.position(1450,700)
            this.next2.position(1450, 700)
            this.next2.hide()
            
            
            //NEXT BUTTONS
            
            //NEXT 1
            this.next.mousePressed(()=>{
            this.welc=createElement('h1')
            this.welc.html("Welcome to the VOID")
            this.welc.position(windowWidth/2-130, 50)
            this.intro1.hide();    
            this.next.hide();
            next2.show()
            })
    //NEXT 2
    this.next2.mousePressed(()=>{
    this.welc.hide();
    this.sile=createElement('h1')
    this.sile.html("...")
    this.sile.position(windowWidth/2, 50)
})
}
}
