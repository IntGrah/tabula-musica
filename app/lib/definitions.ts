export interface User {
    userId: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    crsid?: string
    admin: boolean;
    editor: boolean;
    mailingList: boolean;
    creationTime: Date;
    lastAccessed: Date;
}
