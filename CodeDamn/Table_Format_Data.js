//Print the object data in Table format
const obj={
    Name:"Jay",
    Age:25,
    Gender:"Male"
}
console.table(obj);

//Print the object data in Table format
const Student={
    Stu1:{FirstName:"Jitendra",SecondName:"Kumar",Age:24},
    Stu2:{FirstName:"Amit",SecondName:"Kumar",Age:25},
    Stu3:{FirstName:"Keshav",SecondName:"Kumar",Age:24},
}
console.table(Student);

//Print the array in Table format
let array=["Jeetu","Jay","Amit","Keshav","Vikash"];
console.table(array);


//Output
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│  Name   │ 'Jay'  │
│   Age   │   25   │
│ Gender  │ 'Male' │
└─────────┴────────┘
┌─────────┬────────────┬────────────┬─────┐
│ (index) │ FirstName  │ SecondName │ Age │
├─────────┼────────────┼────────────┼─────┤
│  Stu1   │ 'Jitendra' │  'Kumar'   │ 24  │
│  Stu2   │   'Amit'   │  'Kumar'   │ 25  │
│  Stu3   │  'Keshav'  │  'Kumar'   │ 24  │
└─────────┴────────────┴────────────┴─────┘

┌─────────┬──────────┐
│ (index) │  Values  │
├─────────┼──────────┤
│    0    │ 'Jeetu'  │
│    1    │  'Jay'   │
│    2    │  'Amit'  │
│    3    │ 'Keshav' │
└─────────┴──────────┘
