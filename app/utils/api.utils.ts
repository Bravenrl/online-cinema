import { ApiRoute, AppRoute } from "@/config/api.config";

export const getUrl = (route:ApiRoute | AppRoute, string: string) => `${route}/${string}`;