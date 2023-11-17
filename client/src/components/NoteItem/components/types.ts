export interface IChangeNoteModalProps {
    title: string;
    description: string;
    onTitleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    onDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
    onCloseClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    onSaveClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export type newNoteType = {
    title: string;
    description: string;
};

export interface IAddNoteNodalProps {
    notebookId: string | null;
}