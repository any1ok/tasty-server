import { Delete, Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './boards.entity';
import { BoardRepository } from './boards.repository';
@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
  ) {}
  // private boards: Board[] = [];

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find({ status: BoardStatus.PRIVATE });
  }

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto): Board {
  //   const { title, description } = createBoardDto;
  //   const board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`찾을수 없습니다 ${id}`);
    }
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`찾을수 없습니다 ${id}`);
    }
    return found;
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`찾을수 없습니다 ${id}`);
  //   }
  //   return found;
  // }
  // deleteBoard(id: string): void {
  //   const board = this.getBoardById(id);
  //   if (!board) {
  //     throw new NotFoundException(`찾을수 없습니다 ${id}`);
  //   }
  //   this.boards = this.boards.filter((board) => board.id !== id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
