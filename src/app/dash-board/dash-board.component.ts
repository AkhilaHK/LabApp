import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
   public Product: any =[];
    

   
  public ShowProduct(){
     
    var request = this.http.get("https://localhost:7288/api/Products").toPromise();
    request.then((data: any)=>this.Product=data);
  }

 


  constructor(public http : HttpClient) { }

  ngOnInit(): void {
  }

}
