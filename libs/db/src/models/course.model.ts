import { ApiProperty } from '@nestjs/swagger'
import { arrayProp, modelOptions, Prop, prop, Ref } from '@typegoose/typegoose'
import { Episode } from './episode.model'

@modelOptions({
    schemaOptions: {
        timestamps: true
    }
})

export class Course {
    
    @ApiProperty({ description: '课程名称' })
    @prop()
    name: string

    @ApiProperty({ description: '封面图' })
    @prop()
    cover: string

    @prop({ itemsRef: 'Episode' })
    episodes: Ref<Episode>[]


}