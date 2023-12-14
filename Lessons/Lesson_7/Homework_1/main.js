// let xxx = 'aaaaa';
// console.log(xxx);
// console.log(-100 / '2fasdf')

// console.log('start')
// let obj = {
//     id: 1,
//
// }
// try {
//     console.log(obj.foo.hash);
// } catch (e) {
//     console.log(e)
// } finally {
//     console.log('done')
// }
// console.log('end')


// function divide(a,b) {
//     if (b === 0) {
//         throw new Error('you cannot divide by 0!');
//     }
//     return a / b;
// }
//
// try {
//     divide(10, 0)
// } catch (e) {
//     console.log(e);
// }

// function iterator(users) {
//     for (const user of users) {
//
//         try {
//             console.log(user.wifi.name);
//         } catch (e) {
//             console.log('Error');
//         }
//     }
// }
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// iterator(users);

// let obj= {
//     id: 'agasg',
//     name: 'kok',
// }
//
// // if (obj.wife) {
// //     console.log(obj.wife.name);
// // }
//
// console.log(obj?.wife?.name);

// let name = 'kokos';
// let age = 31;
//
//
// let user = {
//     name,
//     age,
// }
//
// console.log(user);

// function userFabric(id,name,age, greeting) {
//     return {id, name, age, greeting};
// }
//
// let user1 = userFabric(1, 'kokos', 31, () => {
//     console.log('hello');});
// console.log(user1);
// user1.greeting();
//
// let user2 = userFabric(13, 'kokossssss', 100);
// console.log(user2)

// function extractor(obj) {
//     // let id = obj.id;
//     // let name = obj.name;
//
//     let {id, name} = obj;
//
//     console.log(id, name);
// }
// function extractor({id, name}) {
//     console.log(id, name);
// }
//
//
// extractor({id: 1, name: 'kokos', age: 31});
// extractor({id: 2, name: 'abrikos', age: 33, status: true});

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// // let user1 = users[0];
// // let user2 = users[1];
// // let user3 = users[2];
//
// let [user1, user2, user3,,user4] = users;

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let user = {
//     id: 1,
//     name: 'vasya',
//     age: 31,
// };
//
// // let user2 = {
// //     id: user.id,
// //     name: user.name,
// //     age: user.age,
// // };
//
// let user2 = {...user, id: 2, status: false};
//
// console.log(user === user2)
// console.log(user2)
//
// let arr = [...users];
// console.log(arr);
// console.log(arr === users);

// let user = {
//     id: 1,
//     name: 'vasya',
//     age: 31,
//     wife: {name: 'anna'},
//
// }
//
// let uCopy = {...user};
// console.log(uCopy);
// console.log(uCopy === user);
// console.log(uCopy.wife === user.wife);

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// let map = users.map((user,index) => {
//     return {...user, id: index +1};
// })
//
// let map = users.map(({name,age},index) => name, age)


//
// console.log(map);
// console.log(map === users)
// console.log(users);

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
//
// // let mappedUsers = users.map((user,index) => {
// //     let stringify = JSON.stringify(user);
// //     let userObj = JSON.parse(stringify);
// //     userObj.id = index + 1;
// //     return userObj;
// // })
// //
// // console.log(mappedUsers);
// // console.log(mappedUsers === users);
// // console.log(users);
// //
// //
// //
// // let s = JSON.stringify({id: 100500});
// // console.log(s);
// //
// // let naturalObj = JSON.parse(s);
// // console.log(naturalObj);
// //
// // console.log(naturalObj === s);
//
// let obj = {
//     id:100500,
//     emb : {hash:'1241124asf'}
//     foo() {
//
//     }
//
// };
// let clone = structuredClone(obj);
// console.log(clone);
// console.log(clone === obj);
// console.log(clone.emb === obj.emb);

// let checks = [11,22,33,44,55,66]
// // let result = 0;
// // for (const check of checks) {
// //     result += check;
// // }
// //
// // console.log(result);
//
// // let reduce = checks.reduce((result, check) => {
// //     result = result + check;
// //     return result;
// // }, 0);
// //
// // console.log(reduce)

let checks = [110, 220, 133, 244, 155, 266];
// [[<200],[>200]]
// {a:[<200], b:[>200]}
//
// let reduce= checks.reduce((result, check) => {
//     if (check < 200) {
//         if (result[0]) {
//             result[0].push(check);
//         } else {
//             let arr = [];
//             arr.push(check);
//             result[0] = arr;
//         }
//     }
//     if (check > 200) {
//         if (result[1])
//             result[1].push(check);
//     }
//     return result;
// }, [[],[]])
//
// console.log(reduce)

let reduce = checks.reduce((result, check) => {
    // if (check < 200) {
    //     result.a.push(check);
    // }
    //
    // if (check > 200) {
    //     result.b.push(check);
    // }
    if (check < 200) {
        if (result.a && Array.isArray(result.a)) {
            result.a.push(check);
        } else {
            result.a = [];
            result.a.push(check);
        }
    }

    if (check > 200) {
        if (result.b && Array.isArray(result.b)) {
            result.b.push(check);
        } else {
            result.b = [];
            result.b.push(check);
        }
    }
    return result
}, {});

console.log(reduce)
