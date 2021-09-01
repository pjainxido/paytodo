interface ResponseType {
  code: number;
}
export interface GetTodoDataResponseType extends ResponseType {
  msg: string;
  content: any;
}

export interface GetTodoListParamType {
  key: string;
}

export interface GetTodoListResponseType extends ResponseType {
  count: number;
  todoList: any[];
}

export interface GetTodoDataParamType {
  id: string;
}

//post todo create type
export interface PostTodoCreateParamType {
  content: string;
}

export interface PostTodoCreateResponseType extends ResponseType {
  msg: string;
}

export interface PostTodoModifyParamType {
  id: string;
  content: string;
}

export interface PostContentResponseType extends ResponseType {
  msg: string;
  content: string;
}

//post Todo check type
export interface PostTodoCheckParamType {
  id: string;
  isCheck: boolean;
}

export interface PostTodoCheckResponseType extends ResponseType {
  msg: string;
}

//post Todo delete type
export interface PostTodoDeleteParamType {
  id: string;
}

export interface PostTodoDeleteResponseType extends ResponseType {
  msg: string;
}

export interface PostMsgResponseType extends ResponseType {
  msg: string;
}

