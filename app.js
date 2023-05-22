// class Hotel{
//     hotelName
//     hotelAddress
//     noOfRooms=10
//     constructor(hotelName,hotelAddress){
//         this.hotelName=hotelName
//         this.hotelAddress=hotelAddress
//     }
    
//     checkAvailabilty(){
// if(this.noOfRooms>=1){
//     console.log("Room is available")
// }
// else if (this.noOfRooms===0){
//     console.log("Room is not available")
//     }
// }
// }

// class Guest extends Hotel{
//    guestName
//    guestAge
// reservation
// constructor(hotelName,hotelAddress,guestName,guestAge){
//     super(hotelName,hotelAddress)
//     this.guestName=guestName
//     this.guestAge=guestAge
// }
// checkIn(){
//     this.noOfRooms--
// }
// checkOut(){
//     this.noOfRooms++
// }
// }

// const g1=new Guest("ABC","XYZ","Shahood","35")
// g1.checkAvailabilty()
// g1.checkIn()
// g1.checkAvailabilty()

class calc{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    add(){
        return this.x+this.y
    }
    sub(){
        return this.x-this.y
    }
    mul(){
        return this.x*this.y
    }
    div(){
        return this.x/this.y
    }
}

const c1=new calc(2,4)
let result=c1.add()
console.log(result)
