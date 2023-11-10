// Array & Object

var members = ['almond', 'potato', 'yogurt'];
console.log(members[1]); // potato

var i = 0;
while (i < members.length) {
  console.log(`array ${i}: ${members[i]}`);
  i += 1;
}

var roles = {
  // key : value
  programmer: 'almond',
  designer: 'potato',
  manager: 'yogurt',
};
console.log(roles.designer); // potato
// key값을 문자열로 전달
console.log(roles['designer']); // potato

for (var name in roles) {
  console.log('key:', name, '/ value:', roles[name]);
}
