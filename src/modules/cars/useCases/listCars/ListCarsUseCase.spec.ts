import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListCarsUseCase } from './ListCarsUseCase';

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
  });

  it('should be able to list all avaible cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carr1',
      description: 'Car Description',
      daily_rate: 110.0,
      license_plate: 'DEF-123',
      fine_amount: 40,
      brand: 'Car brand',
      category_id: 'category_id',
    });

    const cars = await listCarsUseCase.execute({});
    console.log(cars);
    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Carr2',
      description: 'Car Description',
      daily_rate: 110.0,
      license_plate: 'DEF-123',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listCarsUseCase.execute({
      brand: 'Car_brand',
    });

    expect(cars).toEqual([car]);
  });
});
