export interface WeighingModel{
    id: number,
    placa: string;
    nomeExterno: string; 
    passagem: string;   
    faixa: string;
    date_weighing: Date;
    distance_previous_vehicle: number;
    speed: number;
    gross_vehicle_weight: number;
    length_vehicle: number;
    violation: string;
    lane: number;
    operation: number;
    flow: string;
    id_eqpt: number;
    lane_equipment: number;    
    weighing_valid: boolean;
    classification_vehicle_weighing: number;
}