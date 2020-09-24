let users = [
    {
        department:"Delivery", deptId:1,
            roles:{
                roleId:2, position:"Software Engineer",
                 levels:{
                    levelId:3, grade:"L1",
                     users:[
                         { name:'Alison Mathew', email:"alison.mathew@gmail.com"},
                         {name: 'Amanda Adam',email:"amanda.adam@gmail.com"},
                         { name:'Carol Anthony',email:"carol.antony@gmail.com"},
                         { name:'Fiona Eric',email:"fiona.eric@gmail.com"}
                        ]

                 }
            }},
            {
            department:"Business and Development", deptId:2,
            roles:{
                roleId:2, position:"BA",
                 levels:{
                    levelId:3, grade:"L4",
                    users:[
                        { name:'Joan Jacob', email:"joan.jacob@gmail.com"},
                        {name:'Leah Julian', email:"lean.julian@gmail.com"},
                        { name:'Lisa Nicholas', email:"lisa.nicholas@gmail.com"},
                        { name:'Ruth Neil', email:"ruth.neil@gmail.com"},
                    ]
                 }
                }
            }
        ]
    export default users;