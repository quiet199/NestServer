import { ApiProperty } from '@nestjs/swagger'
import { modelOptions, Prop, prop } from '@typegoose/typegoose'

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class User {
    @ApiProperty({ description: '用戶名', example: 'user1' })
    @prop()
    username: string

    @ApiProperty({ description: '密碼', example: 'pass1' })
    @prop()
    password: string
}