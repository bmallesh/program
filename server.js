exp =require("express")
bp=require("body-parser")
insert1=require("./nodefiles/insert")

app=exp();
app.use(bp.json())
app.use("/insert",insert1)

app.listen(4020)
console.log("server started port no 4020")