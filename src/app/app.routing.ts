import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ClientComponent } from "./components/client/client.component";
import { BusinessComponent } from "./components/business/business.component";
import { ProfesionalComponent } from "./components/profesional/profesional.component";

const appRoute : Routes = [
    {path:'client', component: ClientComponent},
    {path:'business', component: BusinessComponent},
    {path:'profesional', component: ProfesionalComponent},

    {path: "", redirectTo: "/client", pathMatch: "full"},
    {path:'**', component: ClientComponent}
]

export const appRoutingProviders : any[] = []
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoute)
