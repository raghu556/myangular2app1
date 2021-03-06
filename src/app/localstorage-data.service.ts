import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageDataService {
    editFlag: boolean = false;
  write(key: string, value: any) {
        if (value) {
            value = value;
        }
        localStorage.setItem(key, value);
    }

    read<T>(key: string): T {
        let value: string = localStorage.getItem(key);

        if (value && value != "undefined" && value != "null") {
            return <T>JSON.parse(value);
        }

        return null;
    }

}
