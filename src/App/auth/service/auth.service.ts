import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Observable,from} from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { PrismaService } from '../../database/database.service';
import { UserModel } from '../../../domain/models';
import { User} from '@prisma/client'
;
@Injectable()
export class AuthService 
{

    constructor(private readonly prisma: PrismaService){}

    hashPassword(password: string): Observable<string> 
    {
        return  from(bcrypt.hash(password,12));
    }

    registerAccount(user: User) : Observable<User> 
    {

        const { firstName, lastName, email, password,role } = user;
        return this.hashPassword(password).pipe(
            switchMap((hashPassword: string) => {
                return from(this.prisma.user.create({data: {firstName, lastName, email, password: hashPassword,role}}));
            })
        )
    }

}
