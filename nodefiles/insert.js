exp=require("express")
mj=require("mongojs")
conn=mj("mongodb://localhost:27017/pro")

rout=exp.Router()
rout.post('/ins',function(req,res){
    dt=req.body;
    conn.data.find().sort({_id:-1}).limit(1,function(err,rs){
        //console.log(rs)
        if(rs.length==0){
            id=1;
        }else{
            id=rs[0]._id;
            id++
        }
        conn.data.save({_id:id,name:dt.name})
    })

    res.send("inserted")
})
rout.get('/getdata',function(req,res){
    conn.data.find(function(err,result){
        res.send(result)
        //console.log(result)
    });
    //res.send(conn.data.find({name:'janu'}))
})

rout.post('/update',function(req,res){
    dt=req.body;
    conn.data.update(dt[0],{$set:dt[1]})
    res.send("updated")
})

rout.post('/delet',function(req,res){
    dt=req.body;
    conn.data.remove(dt)
    res.send("deleted")
})
module.exports=rout;