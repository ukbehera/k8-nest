import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpService } from '@nestjs/axios';
import { UserDto } from './dto/user.dto';
import { map, Observable } from 'rxjs';

@Injectable()
export class UsersService {
  BASE_URL = process.env.APP_TYPICODE_API;
  constructor(private readonly httpSvc: HttpService) {
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll(): Observable<UserDto[]> {
    return this.httpSvc.get(`${this.BASE_URL}/users`).pipe(map(resp => resp.data as UserDto[]));
  }

  findOne(id: number): Observable<UserDto> {
    return this.httpSvc.get(`${this.BASE_URL}/users/${id}`).pipe(map(resp => resp.data));
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
