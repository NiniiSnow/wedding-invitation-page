export interface LocationVenue {
    id: number;
    nameKey: string;
    descriptionKey: string;
    addressKey: string;
    imgUrl:string;
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
        imgUrl: "/mowameta1.jpg",
        coordinates: {
            lat: 42.282223,
            lng: 42.759166,
        },
    },
    {
        id: 2,
        nameKey: "location.venues.1.name",
        descriptionKey: "location.venues.1.description",
        addressKey: "location.venues.1.address",
        imgUrl: "/varts.jpg",
        coordinates: {
            lat: 42.134678,
            lng: 42.726439,
        },

    },
];

