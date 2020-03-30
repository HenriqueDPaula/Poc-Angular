import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WeighingModel } from './../model/weighing.model';
import { WeighingService } from './../service/weighing.service';

@Component({
  selector: 'app-weighing-axle',
  templateUrl: './weighing-axle.component.html',
  styleUrls: ['./weighing-axle.component.css']
})
export class WeighingAxleComponent implements OnInit {

  weighing: WeighingModel
  
  @Input() isAddAxle: boolean
  @Input() id: number

  constructor(
    private route: ActivatedRoute,    
    private weighingService: WeighingService
  ) { }

  ngOnInit(): void {
    this.weighing = this.weighingService.getWeighingById(this.id)
  }
}
