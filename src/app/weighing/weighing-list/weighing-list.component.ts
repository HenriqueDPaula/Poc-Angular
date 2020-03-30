import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WeighingService } from '../service/weighing.service';
import { WeighingModel } from '../model/weighing.model';

@Component({
  selector: 'app-weighing-list',
  templateUrl: './weighing-list.component.html',
  styleUrls: ['./weighing-list.component.css']
})
export class WeighingListComponent implements OnInit {
  
  weighingList: WeighingModel[] = []

  constructor(
    private weighingService: WeighingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.weighingList = this.weighingService.getPesagens();
  }

  weighingDetail(id: number){
    this.router.navigate(['/weighing', id]);
  }

}
