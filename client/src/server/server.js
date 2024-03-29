import { createServer } from "miragejs";
import { kpis, products, transactions } from "./data/data";

export function server() {
    createServer({


         routes() {
            this.get("/api/kpi", () => {
                return kpis
            }),

            this.get("/api/products", () => {
                return products
            }),

            this.get("/api/transactions", () => {
                return transactions
             })
         }
    });

    return server;
}