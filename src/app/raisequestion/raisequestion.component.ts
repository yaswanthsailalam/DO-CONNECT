import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-raisequestion',
  templateUrl: './raisequestion.component.html',
  styleUrls: ['./raisequestion.component.css']
})
export class RaisequestionComponent implements OnInit {

  constructor(private oak:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  go(){
    this.oak.navigate(['raise'], {relativeTo:this.route})
  }

}
