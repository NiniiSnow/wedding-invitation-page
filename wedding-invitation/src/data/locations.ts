export interface LocationVenue {
    id: number;
    nameKey: string;
    descriptionKey: string;
    addressKey: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

export const venues: LocationVenue[] = [
    {
        id: 1,
        nameKey: "location.venues.0.name",
        descriptionKey: "location.venues.0.description",
        addressKey: "location.venues.0.address",
        coordinates: {
            lat: 42.294712,
            lng: 42.769102,
        },
    },
    {
        id: 2,
        nameKey: "location.venues.1.name",
        descriptionKey: "location.venues.1.description",
        addressKey: "location.venues.1.address",
        coordinates: {
            lat: 42.134678,
            lng: 42.726439,
        },

    },
];

