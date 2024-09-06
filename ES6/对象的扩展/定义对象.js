var city='北京市'
function getCity(){
    return city
}

var object={city,getCity}
//var{city,getCity}=object
console.log(object.city)
console.log(object.getCity())