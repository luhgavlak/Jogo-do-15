class Box{
    constructor(x,y) {this.x = x
    this.y = y}

        getTopBox(){
            if (this.y ==0) return null
            return new Box(this.x,this.y - 1)
        }

        getRightBox(){
            if (this.x ==3) return null
            return new Box(this.x + 1,this.y)
        }


}