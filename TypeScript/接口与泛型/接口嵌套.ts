interface BaseType{
    value:number
    label:string
}

interface ListType{
    tag:string
    list:BaseType[]
}

const citys:ListType={
    tag:'高校',
    list:[
        {
            value:1,
            label:'清华大学',
        },
        {
            value:2,
            label:'北京大学',
        },
    ],
}
console.log(citys)