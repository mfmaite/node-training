import { Controller, Get, Query, Route, Path } from "tsoa";

@Route("message")
export class MessageController extends Controller {
  @Get("{id}")
  public getMessage(@Path() id: string): string {
    return `El id de este mensaje es: ${id}`;
  }

  @Get()
  public replicateMessage(@Query() message: string): string {
    return message;
  }
}
