import { Field, InputType } from "type-graphql"

@InputType()
export class CreateCategoryInput {

  @Field(() => String)
  title!: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => String)
  icon!: string

  @Field(() => String)
  colour!: string
}

@InputType()
export class UpdateCategoryInput {

  @Field(() => String, { nullable: true })
  title?: string

  @Field(() => String, { nullable: true })
  description?: string

  @Field(() => String, { nullable: true })
  icon?: string

  @Field(() => String, { nullable: true })
  colour?: string
}