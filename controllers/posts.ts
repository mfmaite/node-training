import { Body, Controller, Post, Route } from "tsoa";
import { CreatePostData } from "../types/post";
import { createPost } from "../services/post";

@Route("post")
export class PostsController extends Controller {
  @Post()
  public async createPost(@Body() data: CreatePostData) {
    return createPost(data);
  }
}
