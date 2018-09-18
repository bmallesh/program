import { Component, OnInit, Inject } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  name;tex=true;
  constructor( @Inject(Http) public ht) { }

  ngOnInit() {
    this.getdata();
  }

  insert(){
    alert(this.name)
    this.ht.post("insert/ins",{name:this.name}).subscribe(dt=>{
      alert(dt._body);
      this.getdata();
    }) 
  }

  getdt;
  getdata(){
    this.ht.get("insert/getdata").subscribe(data=>{
      this.getdt=JSON.parse(data._body)
      console.log(JSON.parse(data._body))
    })
  }
   temp=0;upname;olddata;
  edit(x){
   this.temp=x._id;
   this.upname=x.name;
   this.olddata={name:x.name}
  }
  newdata;
  save(){
    this.newdata={name:this.upname}
    this.ht.post("insert/update",[this.olddata,this.newdata]).subscribe(dt=>{
      alert(dt._body)
      this.getdata();
      this.temp=0
    })
  }

  delete(x){
    this.ht.post("insert/delet",{_id:x._id}).subscribe(dt=>{
      alert(dt._body)
    })
    this.getdata();
  }

}
