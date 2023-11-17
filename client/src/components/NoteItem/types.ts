export interface INoteItemProps {
    title: string;
    description: string;
    createdAt: string;
    _id: string | undefined;
}

export type updatedNoteType = {
    title: string;
    description: string;
    updatedAt: string;
};
