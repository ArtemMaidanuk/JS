// setTimeout(()=>{
//     let hour=0;
//     console.log(hour,'Прокинувся')
//     setTimeout(()=>{
//         hour++;
//         console.log(hour,'Почистив зуби')
//         setTimeout(()=>{
//             hour++
//             console.log(hour,'Вмився')
//             setTimeout(()=>{
//                 hour++
//                 console.log(hour,'Поснідав')
//                 setTimeout(()=>{
//                     hour++
//                     console.log(hour,'Почав виконувати дз')
//                     setTimeout(()=>{
//                         hour++
//                         console.log(hour,'Пішов допомагати батькам')
//                         setTimeout(()=>{
//                             hour++
//                             console.log(hour,'Пообідав')
//                             setTimeout(()=>{
//                                 hour++
//                                 console.log(hour,'Пішов гуляти')
//                                 setTimeout(()=>{
//                                     hour++
//                                     console.log(hour,'Продовжив виконувати дз')
//                                     setTimeout(()=>{
//                                         hour++
//                                         console.log(hour,'Залипав в інтернет')
//                                         setTimeout(()=>{
//                                             hour++
//                                             console.log(hour,'Відбій')
//
//                                         },1000)
//                                     },2000)
//                                 },1000)
//                             },2000)
//                         },1000)
//                     },2000)
//                 },1000)
//             },2000)
//         },1000)
//     },2000)
// },1000)

let promise = new Promise((a,b)=>{
    let hour=0;
    setTimeout(()=>{
        console.log(hour,'Прокинувся')
        hour++
        a(hour)
    },1000)
});
promise
    .then(hour=>{
       return  new Promise((a,b)=>{
            setTimeout(()=>{
                console.log(hour,'Почистив зуби')
                hour++
                a(hour)
            },2000)
    })})
    .then(hour=>{
        return  new Promise((a,b)=>{
            setTimeout(()=>{
                console.log(hour,'Вмився')
                hour++
                a(hour)
            },3000)
        })})
    .then(hour=>{
        return  new Promise((a,b)=>{
            setTimeout(()=>{
                console.log(hour,'Поснідав')
                hour++
                a(hour)
            },1000)
        })})
    .then(hour=>{
        return  new Promise((a,b)=>{
            setTimeout(()=>{
                console.log(hour,'Почав виконувати дз')
                hour++
                a(hour)
            },2000)
        })})
    .then(hour=>{
        return  new Promise((a,b)=>{
            setTimeout(()=>{
                console.log(hour,'Ліг спати')
                hour++
                a(hour)
            },2000)
        })})