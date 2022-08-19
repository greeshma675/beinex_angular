
var progress_dummy=[
    {
        progress:"14",
        progress_per:"54%",
        data:"Number of tasks on track"
    },
    {
        progress:"8",
        progress_per:"30%",
        data:"Number of tasks on delayed"
    },
    {
        progress:"14",
        progress_per:"16%",
        data:"Number of tasks significiant delayed"
    },
    {
        progress:"19",
        progress_per:"19%",
        data:"Number of tasks completed"
    }
];
var htmlDummy=``
progress_dummy.forEach(pr_dummy=>{
    htmlDummy+=`
    <label for="" style="font-size: 12px;margin-left:10px;color: #96afac;margin-top: 10px;">${pr_dummy.data}</label>
  </div>      
  <label for="" style="color:#c2cdcc;margin-left: 20px;font-size: 10px;">${pr_dummy.progress}</label>
    `
})
document.querySelector("#result").innerHTML=htmlDummy