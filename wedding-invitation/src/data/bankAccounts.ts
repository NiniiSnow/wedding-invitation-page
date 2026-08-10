export interface BankAccount {
    id: string;
    bankName: "BOG" | "TBC";
    accountNumber: string;
    accountHolderName: string;
    currency: "GEL" | "USD" | "EUR";
}

export const BANK_ACCOUNTS: BankAccount[] = [
    {
        id: "1",
        bankName: "BOG",
        accountNumber: "GE92BG0000000162616647",
        accountHolderName: "Nino Chirgadze",
        currency: "GEL",
    },
    {
        id: "2",
        bankName: "TBC",
        accountNumber: "GE16TB7637745063300001",
        accountHolderName: "Dimitri Gelashvili",
        currency: "GEL",
    },
];