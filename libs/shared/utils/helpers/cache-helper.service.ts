import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
// @ts-ignore 
export class CacheHelperService {
    constructor() {
    }
    
    //Lưu trữ giá trị 01 key trên cache 
    public setItem(key: string, value: string) {
        localStorage.setItem(key, value);
    }
    //Lấy giá trị 01 key trên cache
    public getItem(key: string): Observable<any> {
        return of(localStorage.getItem(key));
    }
    //Xóa giá trị 01 key trên cache
    public removeItem(key: string) {
        localStorage.removeItem(key);
    }
    //xóa toàn bộ cache
    public clear(): Observable<boolean> {
        localStorage.clear();
        return of(true)
    }
}