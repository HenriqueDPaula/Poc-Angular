import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WeighingService } from '../service/weighing.service';
import { WeighingModel } from 'src/app/weighing/model/weighing.model';

@Component({
  selector: 'app-weighing-detail',
  templateUrl: './weighing-detail.component.html',
  styleUrls: ['./weighing-detail.component.css']
})
export class WeighingDetailComponent implements OnInit {

  isAddAxle: boolean
  id: number;
  weighing: WeighingModel;  

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private weighingService: WeighingService
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');  
    this.initWeighingDetail(this.id);    
  }

  initWeighingDetail(id){
    this.weighing = this.weighingService.getWeighingById(id);
    if(this.weighing === undefined){
      console.log('Weighing = undefined')
    }
  }

  backToList(){
    this.router.navigate(['/weighing'])
  }

  navigateToAxleForm(){
    this.isAddAxle = true;
    this.id = this.weighing.id
  }

}
