export interface ScheduleItem {
    id: number;
    titleKey: string;
    time: string;
    locationKey: string;
    imageUrl: string;
    height?: string;
    descriptionKey?: string;
}

export const scheduleItems: ScheduleItem[] = [
    {
        id: 1,
        titleKey: "schedule.items.0.title",
        time: "1:00 PM",
        locationKey: "schedule.items.0.location",
        imageUrl: "/church.jpg",
        height: "h-60.5",
        descriptionKey: "schedule.items.0.description",
    },
    {
        id: 2,
        titleKey: "schedule.items.1.title",
        time: "5:00 PM",
        locationKey: "schedule.items.1.location",
        imageUrl: "/ggg.jpg",
        height: "h-60.5 ",
        descriptionKey: "schedule.items.1.description",
    },
    {
        id: 3,
        titleKey: "schedule.items.2.title",
        time: "6:00 PM",
        locationKey: "schedule.items.2.location",
        height: "h-87.5 ",
        imageUrl: "/vartsik.jpg",
        descriptionKey: "schedule.items.2.description",
    },
];
