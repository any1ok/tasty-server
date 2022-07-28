export interface Boards {
  id: string;
  title: string;
  description: string;
  status: BoardsStatus;
}

export enum BoardsStatus {
  Public = 'Public',
  Private = 'Private',
}
