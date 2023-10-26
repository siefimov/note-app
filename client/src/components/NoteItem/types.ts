export interface INoteItemProps {
    title: string;
    description: string;
    createdAt: string;
    id: number | null;
}

export type updatedNoteType = {
    title: string;
    description: string;
    updatedAt: string;
};