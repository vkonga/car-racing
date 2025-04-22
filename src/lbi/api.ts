export interface Car {
    id: number;
    image_url: string;
    max_power: number;
    max_speed: number;
    acceleration:number;
    max_torque:number;
    car_name:string;
}

export const getCars = async (): Promise<Car[]> => {

    const response =  await fetch('http://localhost:5000/cars');
    
    if (!response.ok){
        throw new Error('Failed to fetch cars');
    }
    return response.json();
};