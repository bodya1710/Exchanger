import {axioService} from "./axio.service";

export const exchangeService ={
    getAll:()=>axioService.get()
}