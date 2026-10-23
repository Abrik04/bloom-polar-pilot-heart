import { createFileRoute } from "@tanstack/react-router";
import { ZahidPage } from "@/components/zahid-page";

export const Route = createFileRoute("/")({ component: ZahidPage });
