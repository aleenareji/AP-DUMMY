let data = [
    {
        department:"Delivery", deptId:1,
            roles:{
                roleId:2, position:"Software Engineer",
                 levels:{
                    levelId:3, grade:"L1",
                     questions:[
                         { questionId:1, query:"What programming languages have you used in the past? What are your top two programming languages?"},
                         {questionId:2, query:"How much are you coding on a daily basis? If you do not code on a daily basis, what is typical in your role?"},
                         { questionId:3, query:"How comfortable are you in a startup environment, or do you prefer working in a more established company? ?"},
                         { questionId:4, query:"What distinguishes a great software engineer from a good one? Do you feel you have those qualities?"}
                        ]

                 }
            }},
            {
            department:"Business and Development", deptId:2,
            roles:{
                roleId:2, position:"BA",
                 levels:{
                    levelId:3, grade:"L4",
                    questions:[
                        { questionId:1, query:"How would you handle changes to the scope of a project if a client or manager wanted to add a major feature?"},
                        {questionId:2, query:"How would you update or improve a critical process that was initially formed around out-of-date technology?"},
                        { questionId:3, query:"Your team is falling behind an important project. How do you get them back on track?"},
                        { questionId:4, query:"What software, tools and frameworks do you use to keep track of a project?"},
                    ]
                 }
                }
            }
        ]
    export default data;