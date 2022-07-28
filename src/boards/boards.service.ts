import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards : Board = [];

  getAllBoards() {
    return this.boards;
  }
}
