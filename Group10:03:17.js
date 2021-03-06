var readline = require('readline')

var options = 'list, show n, reserve n, occupancy n max, search amenity'

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

var rooms = [
    {
        price: 200,
        location: '11 Broadway, NY',
        maxOccupants: 3,
        amenities: ['washer/dryer', 'wifi', 'cable']
    },
    {
        price: 100,
        location: '11 Delancey, NY',
        maxOccupants: 1,
        amenities: []
    },
    {
        price: 2000,
        location: '1 Park Pl, NY',
        maxOccupants: 2,
        amenities: ['pool', 'valet', 'butler', 'private dog walker & whisperer']
    },
    {
        price: 90000,
        location: '1 Broad St, NY',
        maxOccupants: 33,
        amenities: ['disco ball']
    },
    {
        price: 2000,
        location: '2312 144th St, NY',
        maxOccupants: 4,
        amenities: []
    },
    {
        price: 200000,
        location: '47-10 Austell Pl, NY',
        maxOccupants: 200,
        amenities: ['drill', 'sometimes wifi', 'luna']
    },
    {
        price: 0,
        location: 'Times Square, NY',
        maxOccupants: 3,
        amenities: ['sewage water', 'hagglers', 'naked cowboy','wifi']
    },
    {
        price: 200000,
        location: '1600 Pennsylvania Ave, DC',
        maxOccupants: 500,
        amenities: ['nixon\'s bowling', 'orange hairpiece', 'oval office', 'pair of small hands']
    },
    {
        price: 2000000,
        location: 'Falchi Bldg, NY',
        maxOccupants: 5000,
        amenities: ['food truck']
    },
    {
        price: 250,
        location: 'Washington Pl, NY',
        maxOccupants: 100,
        amenities: ['fountain', 'dosa cart']
    }    
];

// make the string exactly as long as len
function padTo(str, len) {
    if (str.length > len) {
        return str.slice(0, len - 3) + '...'
    } else {
        while (str.length < len) {
            str += ' '
        }
        return str;
    }
}

// make the string exactly as long as len
function padLeft(str, len) {
    var money = str
    if (money.length > len) {
        return money.slice(0, len - 3) + '...'
    } else {
        while (money.length < len) {
            money = ' ' + money
        }
        return money;
    }
}

function toMoney(num) {
    return '$' + num.toString()
}

function whatsAvailable() {
    console.log(
        padLeft('ID', 2),
        '...',
        padTo('Address', 30), 
        ' ', 
        padLeft('Price', 8)
    );
    for (var i = 0; i < rooms.length; i++) {   // rooms is global so we can call it 
        if (rooms[i].reserved) {               // does not need to be inputted into the function
            continue;
        }
        var counter = i + 1;
        console.log(
            padLeft(counter.toString(), 2),
            '...',
            padTo(rooms[i].location, 30), 
            ' ', 
            padLeft(toMoney(rooms[i].price), 8)
        );
    }
}

function bulletPoints(list) {
    return '\n - ' + list.join('\n - ')
}

function showDetails(n) {
    var room = rooms[n]
    console.log('Details of room #' + (n + 1))
    console.log('----------------------\n')
    if (room.reserved) {
        console.log('[RESERVED]')
    }
    console.log('Location:', room.location)
    console.log('Price:', toMoney(room.price))
    console.log('Max. Occupancy:', room.maxOccupants)
    console.log('Amenities:', bulletPoints(room.amenities))
}

function reserve(n) {
    if (rooms[n].reserved) {
        console.log('Sorry, it\'s already reserved.')
        return
    } 
    rooms[n].reserved = true
    console.log('Thank you for reserving')
}
function changeOcc (n,max){
    rooms[n].maxOccupants = max
    console.log('Occupants set.')
}

function search(amenity){
    console.log(
        padLeft('ID', 2),
        '...',
        padTo('Address', 30), 
        ' ', 
        padLeft('Price', 8)
    )                                             // What we initially did
    for (var i = 0; i < rooms.length; i++) {      // Can just create an empty array
       if(rooms[i].amenities.includes(amenity)){  // push elements that have the amenity into the array
        var counter = i + 1;
        console.log(
            padLeft(counter.toString(), 2),
            '...',
            padTo(rooms[i].location, 30), 
            ' ', 
            padLeft(toMoney(rooms[i].price), 8)
        );
       } ;  
    }
    // console.log('Places with '+ amenity + '\n')
    // console.log(lists.join('\n'))
    
}

rl.on('line', function(input) {
    var inputArr = input.split(' ')  // Input is an array, using split to separate each element
    if (inputArr[0] === 'list') {  
        whatsAvailable();               // This function does not need an input
    } else if (inputArr[0] === 'show') {
        showDetails(inputArr[1] - 1)
    } else if (inputArr[0] === 'reserve') {
        reserve(inputArr[1] - 1)
    } else if(inputArr[0] === 'occupancy'){
        changeOcc(inputArr[1] - 1,inputArr[2]) //This is the index of the input
    } else if (inputArr[0] === 'search') {    // Not directly related to rooms array
        search(inputArr.slice(1).join(' '))
    }                                                   
    else {
        console.log('Unknown command: ' + input)
    }

    console.log('\n\nPlease chose one of [' + options + '] $')
})

console.log('Please chose one of [' + options + '] $')


