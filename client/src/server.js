import { createServer } from "miragejs";
import { kpis } from "./data/data";

export function server() {
    createServer({


         routes() {
            this.get("/api/kpi", () => {
                return kpis
            }),

            this.get("/api/products", () => [
                { message: "Products date here"}
            ]),

            this.get("/api/transactions", () => [
                { message: "Transactions data here"}
            ])
         }
    });

    return server;
}