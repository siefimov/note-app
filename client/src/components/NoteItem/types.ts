export interface INoteItemProps {
    title: string;
    description: string;
    createdAt: string;
    _id: number | null;
}

export type updatedNoteType = {
    title: string;
    description: string;
    updatedAt: string;
};