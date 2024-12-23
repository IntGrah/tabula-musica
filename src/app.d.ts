// See https://kit.svelte.dev/docs/types#app

import type { User, Session } from "@prisma/client";

// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user: User | null;
            session: Session | null;
        }
        interface PageData {
            user: User | null;
            url: string;
        }
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
