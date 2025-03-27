import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        loadComponent: async () => {
            const m = await import("./home/home.component");
            return m.HomeComponent;
        },
        title: "Reading Diary"
    },
    {
        path: "searchbooks",
        loadComponent: async () => {
            const m = await import("./components/searchbooks/searchbooks.component");
            return m.SearchbooksComponent;
        },
        title: "Search for books"
    }
];
