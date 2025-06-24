import { Body, Controller, Post, Route, Get, Path } from "tsoa";
import { CreatePostData } from "../types/post";
import { createPost, getPost, getPosts } from "../services/post";

@Route("post")
export class PostsController extends Controller {
  @Post()
  public async createPost(@Body() data: CreatePostData) {
    return createPost(data);
  }

  @Get()
  public async getPosts() {
    return getPosts();
  }

  // /post/id
  @Get("{id}")
  public async getPost(@Path() id: number) {
    return getPost(id);
  }
}
