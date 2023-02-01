import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-erros',
  templateUrl: './server-erros.component.html',
  styleUrls: ['./server-erros.component.css']
})
export class ServerErrosComponent implements OnInit{
  error: any;

  /**
   *
   */
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.error = navigation?.extras?.state?.['error'];
  }
  ngOnInit(): void {
    
  }
}   
