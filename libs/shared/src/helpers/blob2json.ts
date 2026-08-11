import { Observable, pipe, switchMap } from "rxjs";

export const blob2json = <T>() => pipe(
    switchMap((response: Blob) => {
        // Chuyển đổi Blob thành JSON và trả về một Observable
        return new Observable<T>((observer) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                try {
                    const jsonData = JSON.parse(reader.result as string) as T;
                    observer.next(jsonData);
                    observer.complete();
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    observer.error(error);
                }
            };
            reader.readAsText(response);
        });
    }),
);

export const blob2jsonFn = (blob: Blob) => {
    try {
        const url = URL.createObjectURL(blob);
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open('GET', url, false);
        xmlRequest.send();
        URL.revokeObjectURL(url);
        return JSON.parse(xmlRequest.responseText);
    } catch(error) {
        console.error('Error parsing JSON:', error);
        return null;
    }
}