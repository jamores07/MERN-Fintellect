import { createServer } from "miragejs";
import { kpis, products } from "./data/data";

export function server() {
    createServer({


         routes() {
            this.get("/api/kpi", () => {
                return kpis
            }),

            this.get("/api/products", () => {
                return products
            }),

            this.get("/api/transactions", () => [
                { message: "Transactions data here"}
            ])
         }
    });

    return server;
}