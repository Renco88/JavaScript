const friend = ['rohan', 'joy', 'riaz', 'ridoy'];
friend[3]='jumbura'
console.log(friend[3]);
friend.push('hakim');
friend.push('sakib', 'sourav');
friend.pop();
console.log(friend);

const book =['cse','eee', 'bangla', 'english'];

if(book.includes('law')){
    console.log('aj jomiya porbo')
}
else{
    console.log('aj mon kharap')
}

console.log(Array.isArray(book));

console.log(friend.concat(book));