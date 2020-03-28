import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { WeighingModel } from '../model/weighing.model'

@Injectable({
  providedIn: 'root'
})
export class WeighingService {

  private url: string = 'localhost:4200/weighing/?id='

  constructor(private http: HttpClient) { }

  getPesagem(){
    // return this.http.get<WeighingModel>(this.url + 1);
    return {placa: 'aaasss', nomeExterno: 'nomeExterno'}
  }

  getWeighingById(id): WeighingModel{
    for(let weighing of this.getPesagens()){
      if(weighing.id === parseInt(id)){
        return weighing
      }
    }

    return undefined;
  }
    

  getPesagens(){
    return [
      {id: 1, placa: 'aaasss', nomeExterno: 'nomeExterno', passagem: '111222333', 'faixa': 'faixa 1', date_weighing: new Date(), distance_previous_vehicle: 12, speed: 89,gross_vehicle_weight: 20,length_vehicle: 20,violation: 'vioation 333',lane: 1,operation: 2,flow: 'ushdush',id_eqpt: 1,lane_equipment: 1,weighing_valid: true,classification_vehicle_weighing: 2},
      {id: 2, placa: 'aaasss2', nomeExterno: 'nomeExterno2', passagem: '111222333', 'faixa': 'faixa 1', date_weighing: new Date(), distance_previous_vehicle: 12, speed: 89,gross_vehicle_weight: 20,length_vehicle: 20,violation: 'vioation 333',lane: 1,operation: 2,flow: 'ushdush',id_eqpt: 1,lane_equipment: 1,weighing_valid: false,classification_vehicle_weighing: 2},
      {id: 3, placa: 'aaasss3', nomeExterno: 'nomeExterno3', passagem: '111222333', 'faixa': 'faixa 1', date_weighing: new Date(), distance_previous_vehicle: 12, speed: 89,gross_vehicle_weight: 20,length_vehicle: 20,violation: 'vioation 333',lane: 1,operation: 2,flow: 'ushdush',id_eqpt: 1,lane_equipment: 1,weighing_valid: true,classification_vehicle_weighing: 2},
      {id: 4, placa: 'aaasss4', nomeExterno: 'nomeExterno4', passagem: '111222333', 'faixa': 'faixa 1', date_weighing: new Date(), distance_previous_vehicle: 12, speed: 89,gross_vehicle_weight: 20,length_vehicle: 20,violation: 'vioation 333',lane: 1,operation: 2,flow: 'ushdush',id_eqpt: 1,lane_equipment: 1,weighing_valid: false,classification_vehicle_weighing: 2},
      {id: 5, placa: 'aaasss5', nomeExterno: 'nomeExterno5', passagem: '111222333', 'faixa': 'faixa 1', date_weighing: new Date(), distance_previous_vehicle: 12, speed: 89,gross_vehicle_weight: 20,length_vehicle: 20,violation: 'vioation 333',lane: 1,operation: 2,flow: 'ushdush',id_eqpt: 1,lane_equipment: 1,weighing_valid: true,classification_vehicle_weighing: 2},
      {id: 6, placa: 'aaasss6', nomeExterno: 'nomeExterno6', passagem: '111222333', 'faixa': 'faixa 1', date_weighing: new Date(), distance_previous_vehicle: 12, speed: 89,gross_vehicle_weight: 20,length_vehicle: 20,violation: 'vioation 333',lane: 1,operation: 2,flow: 'ushdush',id_eqpt: 1,lane_equipment: 1,weighing_valid: false,classification_vehicle_weighing: 2},
      {id: 7, placa: 'aaasss7', nomeExterno: 'nomeExterno7', passagem: '111222333', 'faixa': 'faixa 1', date_weighing: new Date(), distance_previous_vehicle: 12, speed: 89,gross_vehicle_weight: 20,length_vehicle: 20,violation: 'vioation 333',lane: 1,operation: 2,flow: 'ushdush',id_eqpt: 1,lane_equipment: 1,weighing_valid: true,classification_vehicle_weighing: 2},
      {id: 8, placa: 'aaasss8', nomeExterno: 'nomeExterno8', passagem: '111222333', 'faixa': 'faixa 1', date_weighing: new Date(), distance_previous_vehicle: 12, speed: 89,gross_vehicle_weight: 20,length_vehicle: 20,violation: 'vioation 333',lane: 1,operation: 2,flow: 'ushdush',id_eqpt: 1,lane_equipment: 1,weighing_valid: true,classification_vehicle_weighing: 2}
    ]
  }

}
