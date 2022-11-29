export const ItemTypes = {
    PIC: "pic"
};

export type RoomType = "kitchen" | "bedroom" | "living room";

export type Item = {
    position: [number, number];
    height: number;
    width: number;
    image: [string];
};
