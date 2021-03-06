import {
  WeightMeasurement,
  WeightMeasurementId,
} from "../../models/WeightMeasurement";
import { WeightMeasurementRepository } from "../../models/WeightMeasurementRepository";
import { v4 as uuid } from "uuid";

export const WeightMeasurementInMemoryRepository =
  (): WeightMeasurementRepository => {
    const WeightMeasurements: WeightMeasurement[] = [
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
      { id: uuid(), weight: 80, date: new Date(2022, 3, 1) },
      { id: uuid(), weight: 85, date: new Date(2022, 3, 2) },
    ];
    const newId = (): WeightMeasurementId => {
      return uuid();
    };
    const getLast = async (): Promise<WeightMeasurement | null> => {
      WeightMeasurements.sort((a, b) => a.date.getTime() - b.date.getTime());
      return WeightMeasurements.length > 0 ? WeightMeasurements[0] : null;
    };
    const add = async (WeightMeasurement: WeightMeasurement): Promise<void> => {
      WeightMeasurements.push(WeightMeasurement);
    };
    const getAll = async (
      limit: number,
      page: number
    ): Promise<WeightMeasurement[]> => {
      WeightMeasurements.sort((a, b) => a.date.getTime() - b.date.getTime());
      return WeightMeasurements.slice((page - 1) * limit, page * limit);
    };
    const remove = async (id: WeightMeasurementId): Promise<void> => {
      const index = WeightMeasurements.findIndex(
        (WeightMeasurement) => WeightMeasurement.id === id
      );
      if (index !== -1) {
        WeightMeasurements.splice(index, 1);
      }
    };

    return {
      newId,
      getLast,
      add,
      getAll,
      remove,
    };
  };
